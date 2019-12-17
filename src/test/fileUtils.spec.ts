import { parseCodacyrcFile } from "../fileUtils"
import { deepEqual } from "assert"
import { Codacyrc } from "../model/codacyInput"
import chai from "chai"

describe("fileUtils", () => {
  describe("parseCodacyrcFile", () => {
    it("should parse a codacyrc file", () => {
      const codacyrcFileContent = `{
      "files" : ["foo/bar/baz.js", "foo2/bar/baz.php"],
      "tools":[
        {
          "name":"jshint",
          "patterns":[
            {
              "patternId":"latedef",
              "parameters":[
                {
                  "name":"latedef",
                  "value":"vars"
                }
              ]
            }
          ]
        }
      ]
    }`
      const parsed = parseCodacyrcFile(codacyrcFileContent)
      const expected: Codacyrc = {
        files: ["foo/bar/baz.js", "foo2/bar/baz.php"],
        tools: [
          {
            name: "jshint",
            patterns: [
              {
                patternId: "latedef",
                parameters: [
                  {
                    name: "latedef",
                    value: "vars"
                  }
                ]
              }
            ]
          }
        ]
      }
      deepEqual(parsed, expected)
    })
    it("should parse a codacyrc file with no files", () => {
      const codacyrcFileContent = `{
      "tools":[
        {
          "name":"jshint",
          "patterns":[
            {
              "patternId":"latedef",
              "parameters":[
                {
                  "name":"latedef",
                  "value":"vars"
                }
              ]
            }
          ]
        }
      ]
    }`
      const parsed = parseCodacyrcFile(codacyrcFileContent)
      const expected: Codacyrc = {
        tools: [
          {
            name: "jshint",
            patterns: [
              {
                patternId: "latedef",
                parameters: [
                  {
                    name: "latedef",
                    value: "vars"
                  }
                ]
              }
            ]
          }
        ]
      }
      deepEqual(parsed, expected)
    })
    it("should parse a codacyrc file with no tools", () => {
      const codacyrcFileContent = `{
      "files" : ["foo/bar/baz.js", "foo2/bar/baz.php"]
    }`
      const parsed = parseCodacyrcFile(codacyrcFileContent)
      const expected: Codacyrc = {
        files: ["foo/bar/baz.js", "foo2/bar/baz.php"]
      }
      deepEqual(parsed, expected)
    })
    it("should fail with an invalid codacyrc file", () => {
      const wrongCodacyrcFileContent = `{`
      chai.expect(() => parseCodacyrcFile(wrongCodacyrcFileContent)).to.throw()
    })
  })
})
