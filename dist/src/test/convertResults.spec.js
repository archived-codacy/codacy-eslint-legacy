"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertResults_1 = require("../convertResults");
const assert_1 = require("assert");
const codacyResult_1 = require("../model/codacyResult");
describe("convertResults", () => {
    it("should convert a Eslint report into Codacy results", () => {
        const report = {
            results: [
                {
                    filePath: "file.js",
                    messages: [
                        {
                            column: 0,
                            line: 1,
                            ruleId: "rule1",
                            message: "Message 1",
                            nodeType: "type",
                            severity: 0,
                            source: null
                        },
                        {
                            column: 0,
                            line: 2,
                            ruleId: "rule2",
                            message: "Message 2",
                            nodeType: "type",
                            severity: 0,
                            source: null
                        }
                    ],
                    errorCount: 2,
                    warningCount: 0,
                    fixableErrorCount: 0,
                    fixableWarningCount: 0
                }
            ],
            errorCount: 2,
            warningCount: 0,
            fixableErrorCount: 0,
            fixableWarningCount: 0
        };
        const results = convertResults_1.convertResults(report);
        const expected = [
            new codacyResult_1.CodacyResult("file.js", "Message 1", "rule1", 1),
            new codacyResult_1.CodacyResult("file.js", "Message 2", "rule2", 2)
        ];
        assert_1.deepEqual(results, expected);
    });
});
//# sourceMappingURL=convertResults.spec.js.map