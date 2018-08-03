package codacy

import codacy.eslint.ESLint
import com.codacy.tools.scala.seed.DockerEngine

object Engine extends DockerEngine(ESLint)()
