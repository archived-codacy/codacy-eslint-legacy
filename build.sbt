import sbt.Keys._
import sbt._

name := "codacy-eslint"
version := "1.0.0-SNAPSHOT"
organization := "com.codacy"

val scalaBinaryVersionNumber = "2.12"
val scalaVersionNumber = s"$scalaBinaryVersionNumber.4"

scalaVersion in ThisBuild := scalaVersionNumber
scalaBinaryVersion in ThisBuild := scalaBinaryVersionNumber

resolvers ++= Seq("Sonatype OSS Snapshots".at("https://oss.sonatype.org/content/repositories/releases"),
                  "Typesafe Repo".at("http://repo.typesafe.com/typesafe/releases/"))

libraryDependencies ++= Seq(Dependencies.seed, Dependencies.scalaXml)

enablePlugins(JavaAppPackaging)
enablePlugins(DockerPlugin)

scapegoatVersion in ThisBuild := "1.3.5"
