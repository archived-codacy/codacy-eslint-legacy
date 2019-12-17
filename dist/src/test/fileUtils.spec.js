"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileUtils_1 = require("../fileUtils");
const assert_1 = require("assert");
const chai_1 = __importDefault(require("chai"));
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
    }`;
            const parsed = fileUtils_1.parseCodacyrcFile(codacyrcFileContent);
            const expected = {
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
            };
            assert_1.deepEqual(parsed, expected);
        });
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
    }`;
            const parsed = fileUtils_1.parseCodacyrcFile(codacyrcFileContent);
            const expected = {
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
            };
            assert_1.deepEqual(parsed, expected);
        });
        it("should parse a codacyrc file with no tools", () => {
            const codacyrcFileContent = `{
      "files" : ["foo/bar/baz.js", "foo2/bar/baz.php"]
    }`;
            const parsed = fileUtils_1.parseCodacyrcFile(codacyrcFileContent);
            const expected = {
                files: ["foo/bar/baz.js", "foo2/bar/baz.php"]
            };
            assert_1.deepEqual(parsed, expected);
        });
        it("should fail with an invalid codacyrc file", () => {
            const wrongCodacyrcFileContent = `{`;
            chai_1.default.expect(() => fileUtils_1.parseCodacyrcFile(wrongCodacyrcFileContent)).to.throw();
        });
    });
});
//# sourceMappingURL=fileUtils.spec.js.map