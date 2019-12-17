import { JSONSchema4 } from "json-schema"
import { flatMap, toPairs } from "lodash"
import { PatternsParameter } from "./model/patterns"

export function fromSchemaArray(objects: JSONSchema4[]): PatternsParameter[] {
  return flatMap(objects, o => {
    const pairs = toPairs(o.properties)
    const haveDefault = pairs.filter(
      ([k, v]) => v && v.hasOwnProperty("default")
    )
    return haveDefault.map(([k, v]) => new PatternsParameter(k, v.default))
  })
}
