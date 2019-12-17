import { convertResults } from "../convertResults"
import { deepEqual } from "assert"
import { CLIEngine } from "eslint"
import { CodacyResult } from "../model/codacyResult"

describe("convertResults", () => {
  it("should convert a Eslint report into Codacy results", () => {
    const report: CLIEngine.LintReport = {
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
    }

    const results = convertResults(report)
    const expected: CodacyResult[] = [
      new CodacyResult("file.js", "Message 1", "rule1", 1),
      new CodacyResult("file.js", "Message 2", "rule2", 2)
    ]

    deepEqual(results, expected)
  })
})
