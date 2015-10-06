package codacy

import codacy.dockerApi.DockerEngine
import codacy.eslint.ESLint

object Engine extends DockerEngine(ESLint)