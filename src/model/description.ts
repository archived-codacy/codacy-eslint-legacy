export class DescriptionParameter {
  readonly name: string
  readonly description: string

  constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }
}

export class DescriptionEntry {
  readonly patternId: string
  readonly title: string
  readonly description: string
  readonly timeToFix: number
  readonly parameters?: DescriptionParameter[]

  constructor(patternId: string, title: string, description: string, timeToFix: number, parameters?: DescriptionParameter[]) {
    this.patternId = patternId
    this.title = title
    this.description = description
    this.timeToFix = timeToFix
    this.parameters = parameters
  }
}
