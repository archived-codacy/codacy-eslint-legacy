package seedtools

import java.io.File
import java.nio.charset.StandardCharsets
import java.nio.file.{Paths, StandardOpenOption, Files, Path}

import scala.util.Try

object FileHelper {

  def createTmpFile(content: String, prefix: String = "config", suffix: String = ".conf"): Path = {
    Files.write(
      Files.createTempFile(prefix, suffix),
      content.getBytes(StandardCharsets.UTF_8),
      StandardOpenOption.CREATE
    )
  }

  def stripPath(filename: Path, prefix: Path): String = {
    stripPath(filename.toString, prefix.toString)
  }

  def stripPath(filename: String, prefix: String): String = {

    val FilenameRegex = s""".*$prefix/(.*)""".r

    filename match {
      case FilenameRegex(res) => res;
      case _ => filename
    }
  }

  def listAllFiles(path: String): Seq[File] = {
    listAllFiles(Paths.get(path))
  }

  def listAllFiles(path: Path): Seq[File] = {
    recursiveListFiles(path.toFile)
  }

  private def recursiveListFiles(file: File): Seq[File] = {
    val these = file.listFiles
    these ++ these.filter(_.isDirectory).flatMap(recursiveListFiles)
  }
}
