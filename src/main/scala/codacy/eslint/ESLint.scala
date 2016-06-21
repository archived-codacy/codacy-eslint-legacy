package codacy.eslint

import java.nio.charset.CodingErrorAction
import java.nio.file.Path

import codacy.dockerApi._
import codacy.dockerApi.utils.{CommandRunner, FileHelper, ToolHelper}
import play.api.libs.functional.syntax._
import play.api.libs.json._

import scala.io.{Codec, Source}
import scala.util.{Failure, Properties, Success, Try}

case class WarnResult(ruleId: String, message: String, line: JsValue)

object WarnResult {
  implicit val warnReads = (
    (__ \ "ruleId").read[String] and
      (__ \ "message").read[String] and
      (__ \ "line").read[JsValue]
    ) (WarnResult.apply _)
}

object ESLint extends Tool {

  override def apply(path: Path, conf: Option[List[PatternDef]], files: Option[Set[Path]])(implicit spec: Spec): Try[List[Result]] = {
    Try {
      val filesToLint: List[String] = files.fold(List(path.toString)) {
        paths =>
          paths.map(_.toString).toList
      }

      val outputFile = FileHelper.createTmpFile("", "codacy-eslint", ".json")

      val patternsToLintOpt = ToolHelper.getPatternsToLint(conf)
      val configuration =
        patternsToLintOpt.fold(List.empty[String]) {
          case patternsToLint if patternsToLint.nonEmpty =>
            List("-c", writeConfigFile(patternsToLint))
          case _ => List.empty[String]
        }

      val command = List("eslint", "-f", "json", "-o", s"${outputFile.toFile.getCanonicalPath}") ++ configuration ++ filesToLint

      CommandRunner.exec(command) match {
        case Right(resultFromTool) =>
          parseToolResult(path, outputFile)
        case Left(e) =>
          Failure(e)
      }
    }.flatten
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

  def hasUnnamedParameters(parameters: List[ParameterDef]): Boolean = {
    parameters.exists(param => isUnnamedParameter(param.name.value))
  }

  def unnamedParameterToConfig(parameter: ParameterDef): List[String] = {
    List(Json.stringify(parameter.value))
  }

  def unnamedListParameterToConfig(parameter: ParameterDef): List[String] = {
    parameter.value.asOpt[List[JsValue]].fold(List.empty[String]) {
      params => params.map(param => Json.stringify(param))
    }
  }

  def namedParameterToConfig(parameter: ParameterDef): String = {
    val parameterName = parameter.name.value
    val parameterValue = Json.stringify(parameter.value)

    s""""$parameterName":$parameterValue"""
  }

  def generateNamedParameters(parameters: List[ParameterDef]): List[String] = {
    parameters.collect {
      case param if isNamedParameter(param.name.value) =>
        namedParameterToConfig(param)
    }
  }

  def generateUnnamedParameters(parameters: List[ParameterDef]): List[String] = {
    parameters.collect {
      case param if isUnnamedListParameter(param.name.value) =>
        unnamedListParameterToConfig(param)
      case param if isUnnamedParameter(param.name.value) =>
        unnamedParameterToConfig(param)
    }.flatten
  }

  def generateParameters(parameters: List[ParameterDef]) = {
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
        val parameters = generateParameters(params.toList)
        s""",$parameters"""
      case _ => ""
    }

    s""""$patternId":[$warnLevel$paramConfig]"""
  }

  def writeConfigFile(patternsToLint: List[PatternDef]): String = {
    val rules = patternsToLint.map(patternToConfig)
    val env = List( """"es6":true""", """"node":true""", """"browser":true""")
    val ecmaFeatures = List( """"jsx":true""")

    val content = s"""{"rules":{${rules.mkString(",")}},"env":{${env.mkString(",")}},"ecmaFeatures":{${ecmaFeatures.mkString(",")}}}"""

    FileHelper.createTmpFile(content, "config", ".json").toString
  }

  def extractIssuesAndErrors(filePath: String, messages: Option[JsArray])(implicit basePath: String): List[Result] = {
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
                  Issue(SourcePath(FileHelper.stripPath(filePath, basePath)), ResultMessage(warn.message),
                    PatternId(warn.ruleId), ResultLine(warn.line.asOpt[Int].getOrElse(1)))
              }
            }
        }.toList
    ).getOrElse(List.empty)
  }

  def resultFromToolResult(toolResults: Seq[JsValue])(implicit basePath: String): List[Result] = {
    toolResults.toList.flatMap { fileResult =>
      (fileResult \ "filePath").asOpt[String].map {
        case filePath =>
          val messages = (fileResult \ "messages").asOpt[JsArray]
          extractIssuesAndErrors(filePath, messages)
      }.getOrElse(List.empty)
    }
  }

  def parseToolResult(path: Path, outputFile: Path): Try[List[Result]] = {
    readFile(outputFile).flatMap { contents =>
      val contentsStr = contents.mkString(Properties.lineSeparator)
      val jsonParsed = Json.parse(contentsStr)

      jsonParsed match {
        case JsArray(fileResults) => Success(resultFromToolResult(fileResults)(path.toString))
        case _ => Failure(new Exception(
          s"""
             |ESLint output is not an array of files
             |stdout: $contentsStr
          """.stripMargin
        ))
      }
    }
  }

  def readFile(path: Path): Try[List[String]] = {
    implicit val codec = Codec("UTF-8")
    codec.onMalformedInput(CodingErrorAction.IGNORE)
    codec.onUnmappableCharacter(CodingErrorAction.IGNORE)

    val contents = Try {
      val buff = Source.fromFile(path.toFile)
      val conts = buff.getLines().toList
      buff.close()
      conts
    }

    contents
  }

}
