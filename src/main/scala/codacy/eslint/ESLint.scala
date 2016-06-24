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

      val command = List("eslint", "--no-eslintrc",
        "--plugin", "react",
        "--plugin", "angular",
        "-f", "json",
        "-o", s"${outputFile.toFile.getCanonicalPath}") ++ configuration ++ filesToLint

      CommandRunner.exec(command) match {
        case Right(resultFromTool) =>
          parseToolResult(path, outputFile) match {
            case s@Success(_) => s
            case Failure(e) =>
              val msg =
                s"""
                   |ESLint exited with code ${resultFromTool.exitCode}
                   |message: ${e.getMessage}
                   |stdout: ${resultFromTool.stdout.mkString(Properties.lineSeparator)}
                   |stderr: ${resultFromTool.stderr.mkString(Properties.lineSeparator)}
                """.stripMargin
              Failure(new Exception(msg))
          }

        case Left(e) =>
          Failure(e)
      }
    }.flatten
  }

  private def parseToolResult(path: Path, outputFile: Path): Try[List[Result]] = {
    readFile(outputFile).flatMap { contents =>
      val contentsStr = contents.mkString(Properties.lineSeparator)
      val jsonParsed = Try(Json.parse(contentsStr))

      jsonParsed match {
        case Success(JsArray(fileResults)) => Success(resultFromToolResult(fileResults)(path.toString))
        case Success(_) => Failure(new Exception(
          s"""
             |ESLint output is not an array of files
             |stdout: $contentsStr
          """.stripMargin
        ))
        case Failure(e) => Failure(e)
      }
    }
  }

  private def resultFromToolResult(toolResults: Seq[JsValue])(implicit basePath: String): List[Result] = {
    toolResults.toList.flatMap { fileResult =>
      (fileResult \ "filePath").asOpt[String].map {
        case filePath =>
          val messages = (fileResult \ "messages").asOpt[JsArray]
          extractIssuesAndErrors(filePath, messages)
      }.getOrElse(List.empty)
    }
  }

  private def extractIssuesAndErrors(filePath: String, messages: Option[JsArray])(implicit basePath: String): List[Result] = {
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

  private def writeConfigFile(patternsToLint: List[PatternDef]): String = {
    val rules = patternsToLint.map(patternToConfig)

    val content =
      s"""{
          |  "rules": {${rules.mkString(",")}},
          |  "env": {
          |    "es6": true,
          |    "node": true,
          |    "browser": true,
          |    "commonjs": true,
          |    "jquery": true,
          |    "phantomjs": true,
          |    "jasmine": true,
          |    "mocha": true,
          |    "amd": true,
          |    "worker": true,
          |    "qunit": true
          |  },
          |  "parserOptions": {
          |    "ecmaVersion": 6,
          |    "ecmaFeatures": {
          |      "jsx": true
          |    }
          |  }
          |}
          |""".stripMargin

    FileHelper.createTmpFile(content, "config", ".json").toString
  }

  private def patternToConfig(pattern: PatternDef): String = {
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

  private def generateParameters(parameters: List[ParameterDef]): String = {
    val unnamedParam = generateUnnamedParameters(parameters)
    val namedParam = generateNamedParameters(parameters)

    val separator = if (unnamedParam.nonEmpty && namedParam.nonEmpty) "," else ""

    val unnamedParamString = unnamedParam.mkString(",")
    val namedParamString = if (namedParam.nonEmpty) s"""{${namedParam.mkString(",")}}""" else ""

    unnamedParamString + separator + namedParamString
  }

  private def generateNamedParameters(parameters: List[ParameterDef]): List[String] = {
    parameters.collect {
      case param if isNamedParameter(param.name.value) =>
        namedParameterToConfig(param)
    }
  }

  private def namedParameterToConfig(parameter: ParameterDef): String = {
    val parameterName = parameter.name.value
    val parameterValue = Json.stringify(parameter.value)

    s""""$parameterName":$parameterValue"""
  }

  private def generateUnnamedParameters(parameters: List[ParameterDef]): List[String] = {
    parameters.collect {
      case param if isUnnamedListParameter(param.name.value) =>
        unnamedListParameterToConfig(param)
      case param if isUnnamedParameter(param.name.value) =>
        unnamedParameterToConfig(param)
    }.flatten
  }

  private def unnamedParameterToConfig(parameter: ParameterDef): List[String] = {
    List(Json.stringify(parameter.value))
  }

  private def unnamedListParameterToConfig(parameter: ParameterDef): List[String] = {
    parameter.value.asOpt[List[JsValue]].fold(List.empty[String]) {
      params => params.map(param => Json.stringify(param))
    }
  }

  private def isUnnamedParameter(parameterName: String): Boolean = {
    parameterName == "unnamedParam"
  }

  private def isUnnamedListParameter(parameterName: String): Boolean = {
    parameterName == "unnamedParamList"
  }

  private def isNamedParameter(parameterName: String): Boolean = {
    !isUnnamedParameter(parameterName) && !isUnnamedListParameter(parameterName)
  }

  private def readFile(path: Path): Try[List[String]] = {
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
