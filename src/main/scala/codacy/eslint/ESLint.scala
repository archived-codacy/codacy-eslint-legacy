package codacy.eslint

import java.nio.file.Path

import codacy.XML
import codacy.dockerApi.utils.{CommandRunner, FileHelper, ToolHelper}
import codacy.dockerApi.{PatternId, ResultLine, ResultMessage, SourcePath, _}
import play.api.libs.json._

import scala.io.Source
import scala.util.{Failure, Properties, Success, Try}
import scala.xml.Elem

object ESLint extends Tool {

  lazy val blacklist = Set(
    "import_",
    "node_no-missing-require"
  )

  override def apply(path: Path, conf: Option[List[PatternDef]], files: Option[Set[Path]])(implicit spec: Spec): Try[List[Result]] = {
    Try {
      val filesToLint: List[String] = files.fold(List(path.toString)) {
        paths =>
          paths.map(_.toString).toList
      }

      val outputFile = FileHelper.createTmpFile("", "codacy-eslint-output", ".xml")

      val patternsToLintOpt = ToolHelper.getPatternsToLint(conf)
      val configuration =
        patternsToLintOpt.fold(List.empty[String]) {
          case patternsToLint if patternsToLint.nonEmpty =>
            List("-c", writeConfigFile(patternsToLint))
          case _ => List.empty[String]
        }

      val command = List("eslint") ++
        (if (conf.nonEmpty) Some("--no-eslintrc") else None) ++
        List("-f", "checkstyle", "--ext", ".js", "--ext", ".jsx",
          "-o", s"${outputFile.toFile.getCanonicalPath}") ++ configuration ++ filesToLint

      CommandRunner.exec(command, Some(path.toFile)) match {
        case Right(resultFromTool) =>
          parseToolResult(outputFile) match {
            case s@Success(_) => s
            case Failure(e) =>
              val msg =
                s"""
                   |${e.getStackTrace.mkString(System.lineSeparator)}
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

  private def parseToolResult(outputFile: Path): Try[List[Result]] = {
    def blacklisted(result: Result): Boolean = {
      result match {
        case issue: Issue => blacklist.exists(b => issue.patternId.value.startsWith(b))
        case _ => false
      }
    }

    Try {
      val xmlParsed = XML.loadFile(outputFile.toFile)
      parseToolResult(xmlParsed).filterNot(blacklisted)
    } match {
      case s@Success(_) => s
      case Failure(e) =>
        Failure(new Exception(
          s"""Message: ${e.getMessage}
             |FileContents:
             |${Source.fromFile(outputFile.toFile).getLines().mkString("\n")}
          """.stripMargin, e))
    }
  }

  private def parseToolResult(outputXml: Elem): List[Result] = {
    /* Example:
     * <file name="">
     *   <error line=""
     *          column=""
     *          severity=""
     *          message=""
     *          source="eslint.rules.{{ message.ruleId }}"/>
     * </file>
     */

    (outputXml \ "file").flatMap {
      file =>
        val filename = file \@ "name"
        (file \ "error").flatMap {
          error =>
            val source = (error \@ "source").stripPrefix("eslint.rules.").replace("/", "_")
            Option(source).collect {
              case patternId if patternId.nonEmpty =>
                val line = (error \@ "line").toInt
                val message = error \@ "message"
                Issue(SourcePath(filename), ResultMessage(message), PatternId(patternId), ResultLine(line))
            }
        }
    }.toList
  }

  private def writeConfigFile(patternsToLint: List[PatternDef]): String = {
    val rules = patternsToLint.map(patternToConfig)

    val content =
      s"""{
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
         |  "parser": "babel-eslint",
         |  "parserOptions": {
         |    "ecmaVersion": "2017",
         |    "ecmaFeatures": {
         |      "jsx": true
         |    }
         |  },
         |  "plugins": [
         |    "angular",
         |    "babel",
         |    "backbone",
         |    "flowtype",
         |    "html",
         |    "import",
         |    "jsx-a11y",
         |    "lodash",
         |    "lodash-fp",
         |    "meteor",
         |    "mocha",
         |    "mongodb",
         |    "no-unsafe-innerhtml",
         |    "node",
         |    "promise",
         |    "react",
         |    "security",
         |    "standard",
         |    "vue"
         |  ],
         |  "rules": {${rules.mkString(",")}}
         |}""".stripMargin

    FileHelper.createTmpFile(content, "config", ".json").toString
  }

  private def patternToConfig(pattern: PatternDef): String = {
    val patternId = pattern.patternId.value.replaceFirst("_", "/")
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

}
