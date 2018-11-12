import com.typesafe.sbt.packager.docker.{Cmd, ExecCmd}

name := "codacy-eslint"

version := "1.0.0-SNAPSHOT"

val languageVersion = "2.12.6"

scalaVersion := languageVersion

resolvers ++= Seq("Sonatype OSS Snapshots".at("https://oss.sonatype.org/content/repositories/releases"),
                  "Typesafe Repo".at("http://repo.typesafe.com/typesafe/releases/"))

libraryDependencies ++= Seq(("com.codacy" %% "codacy-engine-scala-seed" % "3.0.183").withSources(),
                            ("org.scala-lang.modules" %% "scala-xml" % "1.0.6").withSources())

enablePlugins(JavaAppPackaging)

enablePlugins(DockerPlugin)

version in Docker := "1.0.0-SNAPSHOT"

organization := "com.codacy"

lazy val toolVersion = taskKey[String]("Retrieve the version of the underlying tool from patterns.json")
toolVersion := {
  import better.files.File
  import play.api.libs.json.{JsString, JsValue, Json}

  val jsonFile = resourceDirectory.in(Compile).value / "docs" / "patterns.json"
  val patternsJsonValues = Json.parse(File(jsonFile.toPath).contentAsString).as[Map[String, JsValue]]

  patternsJsonValues
    .collectFirst {
      case ("version", JsString(version)) => version
    }
    .getOrElse(throw new Exception("Failed to retrieve version from docs/patterns.json"))
}

def installAll(toolVersion: String) =
  s"""apk update &&
     |apk add bash curl nodejs-npm &&
     |npm install -g npm@5 &&
     |npm install -g eslint@$toolVersion &&
     |npm install -g babel-eslint@10.0.1 &&
     |npm install -g eslint-plugin-import@2.9.0 &&
     |npm install -g eslint-plugin-jsx-a11y@6.1.2 &&
     |npm install -g eslint-plugin-react@7.8.2 &&
     |npm install -g webpack@3.6.0 &&
     |npm install -g eslint-plugin-jest@21.15.0 &&
     |npm install -g eslint-import-resolver-webpack@0.8.3 &&
     |npm install -g eslint-import-resolver-node@0.3.1 &&
     |npm install -g eslint-config-airbnb-base@13.1.0 &&
     |npm install -g eslint-config-airbnb@17.1.0 &&
     |npm install -g eslint-config-angular@0.5.0 &&
     |npm install -g eslint-config-apiconnect@2.0.1 &&
     |npm install -g eslint-config-drupal@3.0.0 &&
     |npm install -g eslint-config-es5@0.5.0 &&
     |npm install -g eslint-config-es6@1.10.3 &&
     |npm install -g eslint-config-loopback@8.0.0 &&
     |npm install -g eslint-config-nodesecurity@1.3.1 &&
     |npm install -g eslint-plugin-node@5.1.1 &&
     |npm install -g eslint-plugin-promise@4.0.1 &&
     |npm install -g eslint-plugin-standard@3.0.1 &&
     |npm install -g eslint-config-standard@10.2.1 &&
     |npm install -g eslint-config-standard-react@7.0.2 &&
     |npm install -g eslint-config-strongloop@2.1.0 &&
     |npm install -g eslint-plugin-vue@4.7.1 &&
     |npm install -g eslint-config-vue@2.0.2 &&
     |npm install -g eslint-config-winedirect@1.0.0 &&
     |npm install -g lint-staged@4.0.2 &&
     |npm install -g eslint-config-dbk@2.0.0 &&
     |npm install -g eslint-config-google@0.9.1 &&
     |npm install -g prettier@1.15.2 &&
     |npm install -g eslint-plugin-prettier@3.0.0 &&
     |npm install -g eslint-config-prettier@3.3.0 &&
     |npm install -g eslint-config-signavio-test@2.0.0 &&
     |npm install -g eslint-config-signavio@3.2.0 &&
     |npm install -g eslint-config-simplifield@7.0.1 &&
     |npm install -g eslint-plugin-drupal@0.3.1 &&
     |npm install -g eslint-plugin-lodash-fp@2.1.3 &&
     |npm install -g eslint-plugin-mocha@4.11.0 &&
     |npm install -g eslint-plugin-chai-expect@1.1.1 &&
     |npm install -g eslint-plugin-mongodb@0.2.4 &&
     |npm install -g eslint-plugin-no-unsafe-innerhtml@1.0.16 &&
     |npm install -g eslint-plugin-hapi@4.1.0 &&
     |npm install -g eslint-plugin-security@1.4.0 &&
     |npm install -g eslint-plugin-sorting@0.3.0 &&
     |npm install -g eslint-config-xo@0.18.2 &&
     |npm install -g eslint-config-xo-react@0.13.0 &&
     |npm install -g eslint-config-xo-space@0.16.0 &&
     |npm install -g eslint-plugin-angular@3.1.1 &&
     |npm install -g eslint-plugin-babel@5.2.0 &&
     |npm install -g eslint-plugin-backbone@2.1.1 &&
     |npm install -g eslint-plugin-flowtype@2.35.1 &&
     |npm install -g eslint-plugin-html@3.2.2 &&
     |npm install -g eslint-plugin-lodash@2.4.5 &&
     |npm install -g eslint-plugin-meteor@4.1.4 &&
     |npm install -g eslint-plugin-no-only-tests@2.0.0 &&
     |npm install -g eslint-plugin-no-unsanitized@3.0.0 &&
     |npm install -g eslint-config-rallycoding@3.2.0 &&
     |npm install -g eslint-config-react-app@2.1.0 &&
     |npm install -g eslint-config-react@1.1.7 &&
     |npm install -g eslint-plugin-jasmine@2.9.3 &&
     |npm install -g eslint-plugin-sfdx@1.0 &&
     |npm install -g eslint-plugin-redux-saga@0.8.0 &&
     |npm install -g eslint-config-gatsby-standard@1.2.0 &&
     |npm install -g eslint-plugin-react-intl@1.1.2 &&
     |npm install -g eslint-plugin-json@1.2.1 &&
     |npm install -g eslint-plugin-cypress@2.0.1 &&
     |npm install -g @prodigy/eslint-config-prodigy &&
     |rm -rf /tmp/* &&
     |rm -rf /var/cache/apk/*""".stripMargin
    .replaceAll(System.lineSeparator(), " ")

mappings.in(Universal) ++= resourceDirectory
  .in(Compile)
  .map { resourceDir: File =>
    val src = resourceDir / "docs"
    val dest = "/docs"

    (for {
      path <- better.files.File(src.toPath).listRecursively()
      if !path.isDirectory
    } yield path.toJava -> path.toString.replaceFirst(src.toString, dest)).toSeq
  }
  .value

val dockerUser = "docker"
val dockerGroup = "docker"

daemonUser in Docker := dockerUser

daemonGroup in Docker := dockerGroup

dockerBaseImage := "openjdk:8-jre-alpine"

dockerCommands := {
  dockerCommands.dependsOn(toolVersion).value.flatMap {
    case cmd @ Cmd("ADD", _) =>
      List(Cmd("RUN", s"adduser -u 2004 -D $dockerUser"),
           cmd,
           Cmd("RUN", installAll(toolVersion.value)),
           Cmd("RUN", "mv /opt/docker/docs /docs"),
           ExecCmd("RUN", Seq("chown", "-R", s"$dockerUser:$dockerGroup", "/docs"): _*),
           Cmd("ENV", "NODE_PATH /usr/lib/node_modules"))
    case other => List(other)
  }
}
