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
  "com.codacy" %% "codacy-engine-scala-seed" % "2.7.0" withSources(),
  "org.scala-lang.modules" %% "scala-xml" % "1.0.4" withSources()
)

enablePlugins(JavaAppPackaging)

enablePlugins(DockerPlugin)

version in Docker := "1.0"

organization := "com.codacy"

val installAll =
  s"""echo "http://dl-cdn.alpinelinux.org/alpine/v3.5/main" >> /etc/apk/repositories &&
     |echo "http://dl-cdn.alpinelinux.org/alpine/v3.5/community" >> /etc/apk/repositories &&
     |apk update && apk add bash curl nodejs-current &&
     |npm install -g eslint@3.19.0 &&
     |npm install -g babel-eslint@6.1.2 &&
     |npm install -g eslint-plugin-react@6.10.0 &&
     |npm install -g eslint-plugin-babel@3.3.0 &&
     |npm install -g eslint-plugin-mocha@4.8.0 &&
     |npm install -g eslint-plugin-standard@2.1.1 &&
     |npm install -g eslint-plugin-promise@3.5.0 &&
     |npm install -g eslint-plugin-jsx-a11y@2.0.1 &&
     |npm install -g eslint-plugin-import@1.12.0 &&
     |npm install -g eslint-import-resolver-webpack@0.8.1 &&
     |npm install -g eslint-plugin-angular@1.3.1 &&
     |npm install -g eslint-config-standard@7.0.1 &&
     |npm install -g eslint-plugin-flowtype@2.11.1 &&
     |npm install -g eslint-plugin-meteor@4.0.0 &&
     |npm install -g eslint-config-airbnb@10.0.0 &&
     |npm install -g eslint-config-angular@0.5.0 &&
     |npm install -g eslint-plugin-vue@1.0.0 &&
     |npm install -g eslint-config-vue@2.0.1 &&
     |npm install -g eslint-plugin-html@1.7.0 &&
     |npm install -g eslint-config-google@0.7.1 &&
     |npm install -g eslint-config-simplifield@5.1.1 &&
     |npm install -g eslint-plugin-mongodb@0.2.4 &&
     |npm install -g eslint-plugin-node@3.0.5 &&
     |npm install -g eslint-config-airbnb-base@5.0.1 &&
     |npm install -g eslint-config-apiconnect@2.0.1 &&
     |npm install -g eslint-config-loopback@7.0.1 &&
     |npm install -g eslint-config-strongloop@2.1.0 &&
     |npm install -g eslint-plugin-security@1.2.0 &&
     |npm install -g eslint-config-nodesecurity@1.3.1 &&
     |npm install -g eslint-config-es5@0.5.0 &&
     |npm install -g eslint-plugin-scanjs-rules@0.1.5 &&
     |npm install -g eslint-plugin-no-unsafe-innerhtml@1.0.15 &&
     |npm install -g eslint-config-secure@0.2.1 &&
     |npm install -g eslint-plugin-lodash@2.3.5 &&
     |npm install -g eslint-plugin-lodash-fp@2.1.3 &&
     |npm install -g eslint-plugin-backbone@2.0.2 &&
     |npm install -g eslint-config-signavio@1.4.3 &&
     |npm install -g eslint-config-signavio-test@1.2.2 &&
     |rm -rf /tmp/* &&
     |rm -rf /var/cache/apk/*""".stripMargin.replaceAll(System.lineSeparator(), " ")

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

dockerBaseImage := "develar/java"

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
