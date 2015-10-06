package seedtools

import codacy.dockerApi._

object ToolHelper {

  def getPatternsToLint(conf: Option[Seq[PatternDef]])(implicit spec: Spec): Seq[PatternDef] = {

    conf.fold(getDefaultConfFromSpec(spec)) {
      configuration =>
          configuration.map(pattern => getMissingParametersFromSpec(pattern))
    }
  }

  private def convertToParametersDefFromSpec(parametersSpec: Option[Set[ParameterSpec]]): Option[Set[ParameterDef]] = {
    parametersSpec.map(params => params.map(param => ParameterDef(param.name, param.default)))
  }

  private def getDefaultConfFromSpec(spec: Spec): Seq[PatternDef] = {
    spec.patterns.toSeq.map(pattern => PatternDef(pattern.patternId, convertToParametersDefFromSpec(pattern.parameters)))
  }


  private def buildParameterDefFromSpec(parameterSpec: ParameterSpec): ParameterDef = {
    ParameterDef(parameterSpec.name, parameterSpec.default)
  }

  private def getParametersByPatternId(patternId: PatternId)(implicit spec: Spec): Set[ParameterDef] = {
    val specPattern = spec.patterns.find(_.patternId == patternId)

    specPattern.flatMap {
      patternSpec =>
        patternSpec.parameters.map(params => params.map(buildParameterDefFromSpec))
    }.getOrElse(Set())
  }

  private def getMissingParametersFromSpec(pattern: PatternDef)(implicit spec: Spec): PatternDef = {
    val params = pattern.parameters.getOrElse(getParametersByPatternId(pattern.patternId))
    PatternDef(pattern.patternId, Some(params))
  }
}