import { capitalize, patternTitle } from "../docGeneratorStringUtils"
import { equal } from "assert"

describe("DocGeneratorStringUtils", () => {
  describe("capitalize", () => {
    it("should capitalize strings", () => {
      equal(capitalize("hey there"), "Hey there")
    })
    it("should not touch already capitalized strings", () => {
      equal(capitalize("Hey there"), "Hey there")
    })
  })
  describe("patternTitle", () => {
    it("should create proper titles from patterns", () => {
      equal(patternTitle("example-eslint-pattern"), "Example eslint pattern")
    })
    it("should manage families properly", () => {
      equal(
        patternTitle("family/example-eslint-pattern"),
        "Family: Example eslint pattern"
      )
    })
    it("should manage families and subfamilies properly", () => {
      equal(
        patternTitle("family/subfamily/example-eslint-pattern"),
        "Family: [Subfamily] Example eslint pattern"
      )
    })
  })
})
