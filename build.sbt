import com.typesafe.sbt.packager.docker.{Cmd, ExecCmd}

name := """codacy-engine-eslint"""

version := "1.0-SNAPSHOT"

val languageVersion = "2.11.7"

scalaVersion := languageVersion

resolvers ++= Seq(
  "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/releases",
  "Typesafe Repo" at "http://repo.typesafe.com/typesafe/releases/"
)

libraryDependencies ++= Seq(
  "com.typesafe.play" %% "play-json" % "2.3.8",
  "com.codacy" %% "codacy-engine-scala-seed" % "2.6.31" withSources(),
  "org.scala-lang.modules" %% "scala-xml" % "1.0.4" withSources()
)

enablePlugins(JavaAppPackaging)

enablePlugins(DockerPlugin)

version in Docker := "1.0"

organization := "com.codacy"

val installAll =
  s"""apk update && apk add bash curl nodejs python &&
      |npm install -g eslint@3.2.2 &&
      |npm install -g babel-eslint@6.1.2 &&
      |npm install -g eslint-plugin-react@6.0.0 &&
      |npm install -g eslint-plugin-babel@3.3.0 &&
      |npm install -g eslint-plugin-mocha@4.3.0 &&
      |npm install -g eslint-plugin-standard@2.0.0 &&
      |npm install -g eslint-plugin-promise@2.0.0 &&
      |npm install -g eslint-plugin-jsx-a11y@2.0.1 &&
      |npm install -g eslint-plugin-import@1.12.0 &&
      |npm install -g eslint-plugin-angular@1.3.1 &&
      |npm install -g eslint-config-standard@5.3.5 &&
      |npm install -g eslint-config-airbnb@10.0.0 &&
      |npm install -g eslint-config-airbnb-base@5.0.1""".stripMargin.replaceAll(System.lineSeparator(), " ")

mappings in Universal <++= (resourceDirectory in Compile) map { (resourceDir: File) =>
  val src = resourceDir / "docs"
  val dest = "/docs"

  for {
    path <- (src ***).get
    if !path.isDirectory
  } yield path -> path.toString.replaceFirst(src.toString, dest)
}


val dockerUser = "docker"
val dockerGroup = "docker"

daemonUser in Docker := dockerUser

daemonGroup in Docker := dockerGroup

dockerBaseImage := "frolvlad/alpine-oraclejdk8"

dockerCommands := dockerCommands.value.flatMap {
  case cmd@Cmd("WORKDIR", _) => List(cmd,
    Cmd("RUN", installAll)
  )
  case cmd@(Cmd("ADD", "opt /opt")) => List(cmd,
    Cmd("RUN", "mv /opt/docker/docs /docs"),
    Cmd("RUN", "adduser -u 2004 -D docker"),
    ExecCmd("RUN", Seq("chown", "-R", s"$dockerUser:$dockerGroup", "/docs"): _*)
  )
  case other => List(other)
}
