package codacy.eslint

import java.nio.file.Path
import codacy.dockerApi._
import codacy.dockerApi.utils.{FileHelper, ToolHelper, CommandRunner}
import play.api.libs.json._
import scala.util.Try

import play.api.libs.functional.syntax._

case class WarnResult(ruleId: String, message: String, line: JsValue)

object WarnResult {
  implicit val warnReads = (
    (__ \ "ruleId").read[String] and
      (__ \ "message").read[String] and
      (__ \ "line").read[JsValue]
    )(WarnResult.apply _)
}

object ESLint extends Tool {

  override def apply(path: Path, conf: Option[Seq[PatternDef]], files: Option[Set[Path]])(implicit spec: Spec): Try[Iterable[Result]] = {
    Try {
      val filesToLint: Seq[String] = files.fold(Seq(path.toString)) {
        paths =>
          paths.map(_.toString).toSeq
      }

      val patternsToLintOpt = ToolHelper.getPatternsToLint(conf)
      val configuration =
        patternsToLintOpt.fold(Seq.empty[String]) {
          case patternsToLint if patternsToLint.nonEmpty =>
            Seq("-c", writeConfigFile(patternsToLint))
          case _ => Seq.empty[String]
        }

      val command = Seq("eslint", "-f", "json") ++ configuration ++ filesToLint

      CommandRunner.exec(command) match {
        case Right(resultFromTool) =>
          parseToolResult(resultFromTool.stdout, path)
        case Left(failure) => throw failure
      }
    }
  }

  def isUnnamedParameter(parameterName: String): Boolean = {
    parameterName == "unnamedParam"
  }

  def isUnnamedListParameter(parameterName: String): Boolean = {
    parameterName == "unnamedParamList"
  }

  def isNamedParameter(parameterName: String): Boolean = {
    !isUnnamedParameter(parameterName) && !isUnnamedListParameter(parameterName)
  }

  def hasUnnamedParameters(parameters: Seq[ParameterDef]): Boolean = {
    parameters.exists(param => isUnnamedParameter(param.name.value))
  }

  def unnamedParameterToConfig(parameter: ParameterDef): Seq[String] = {
    Seq(Json.stringify(parameter.value))
  }

  def unnamedListParameterToConfig(parameter: ParameterDef): Seq[String] = {
    parameter.value.asOpt[Seq[JsValue]].fold(Seq.empty[String]) {
      params => params.map(param => Json.stringify(param))
    }
  }

  def namedParameterToConfig(parameter: ParameterDef): String = {
    val parameterName = parameter.name.value
    val parameterValue = Json.stringify(parameter.value)

    s""""$parameterName":$parameterValue"""
  }

  def generateNamedParameters(parameters: Seq[ParameterDef]): Seq[String] = {
    parameters.collect {
      case param if isNamedParameter(param.name.value) =>
        namedParameterToConfig(param)
    }
  }

  def generateUnnamedParameters(parameters: Seq[ParameterDef]): Seq[String] = {
    parameters.collect {
      case param if isUnnamedListParameter(param.name.value) =>
        unnamedListParameterToConfig(param)
      case param if isUnnamedParameter(param.name.value) =>
        unnamedParameterToConfig(param)
    }.flatten
  }

  def generateParameters(parameters: Seq[ParameterDef]) = {
    val unnamedParam = generateUnnamedParameters(parameters)
    val namedParam = generateNamedParameters(parameters)

    val separator =
      if (unnamedParam.nonEmpty && namedParam.nonEmpty) "," else ""

    val unnamedParamString = unnamedParam.mkString(",")
    val namedParamString =
      if (namedParam.nonEmpty) s"""{${namedParam.mkString(",")}}""" else ""

    unnamedParamString + separator + namedParamString
  }

  def patternToConfig(pattern: PatternDef): String = {
    val patternId = pattern.patternId.value
    val warnLevel = 1
    val paramConfig = pattern.parameters.fold("") {
      case params if params.nonEmpty =>
        val parameters = generateParameters(params.toSeq)
        s""",$parameters"""
      case _ => ""
    }

    s""""$patternId":[$warnLevel$paramConfig]"""
  }

  def writeConfigFile(patternsToLint: Seq[PatternDef]): String = {
    val rules = patternsToLint.map(patternToConfig)
    val env = Seq( """"es6":true""", """"node":true""", """"browser":true""")
    val ecmaFeatures = Seq( """"jsx":true""")

    val content = s"""{"rules":{${rules.mkString(",")}},"env":{${env.mkString(",")}},"ecmaFeatures":{${ecmaFeatures.mkString(",")}}}"""

    FileHelper.createTmpFile(content, "config", ".json").toString
  }

  def extractIssuesAndErrors(filePath: String, messages: Option[JsArray])(implicit basePath: String): Seq[Result] = {

    messages.map(
      messagesArr =>
        messagesArr.value.flatMap {
          message =>
            val isFatal = (message \ "fatal").asOpt[Boolean].getOrElse(false)
            if (isFatal) {
              val path = SourcePath(FileHelper.stripPath(filePath, basePath))
              val msg = (message \ "message").asOpt[String].getOrElse("Fatal Error")

              Some(FileError(path, Some(ErrorMessage(msg))))
            }
            else {
              message.asOpt[WarnResult].map {
                warn =>
                  Issue(SourcePath(FileHelper.stripPath(filePath, basePath)), ResultMessage(warn.message), PatternId(warn.ruleId), ResultLine(warn.line.asOpt[Int].getOrElse(1)))
              }
            }
        }
    ).getOrElse(Seq())
  }

  def resultFromToolResult(toolResult: JsArray)(implicit basePath: String): Seq[Result] = {
    toolResult.value.flatMap {
      fileResult =>
        (fileResult \ "filePath").asOpt[String].map {
          case filePath =>
            val messages = (fileResult \ "messages").asOpt[JsArray]
            extractIssuesAndErrors(filePath, messages)
        }.getOrElse(Seq())
    }
  }

  def parseToolResult(resultFromTool: Seq[String], path: Path): Iterable[Result] = {
    implicit val basePath = path.toString

    val jsonParsed = Json.parse(resultFromTool.mkString)
    jsonParsed.asOpt[JsArray].fold(Seq[Result]())(resultFromToolResult)
  }

}