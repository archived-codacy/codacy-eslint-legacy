import { JSONSchema4 } from "json-schema"
import { deepEqual } from "assert"
import { fromSchemaArray } from "../namedParameters"
import { PatternsParameter } from "../model/patterns"

describe("namedParameters", () => {
  describe("fromSchemaArray", () => {
    it("should generate PatternParameters[]", () => {
      const schemaArray: JSONSchema4[] = [
        {
          type: "object",
          properties: {
            getWithoutSet: {
              type: "boolean",
              default: false
            },
            setWithoutGet: {
              type: "boolean",
              default: true
            },
            enforceForClassMembers: {
              type: "boolean",
              default: false
            }
          },
          additionalProperties: false
        }
      ]
      const expectedResult = [
        new PatternsParameter("getWithoutSet", false),
        new PatternsParameter("setWithoutGet", true),
        new PatternsParameter("enforceForClassMembers", false)
      ]
      deepEqual(fromSchemaArray(schemaArray), expectedResult)
    })
  })
})
