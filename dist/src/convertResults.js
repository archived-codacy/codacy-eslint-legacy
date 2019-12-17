"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codacyResult_1 = require("./model/codacyResult");
const lodash_1 = require("lodash");
const patterns_1 = require("./model/patterns");
function convertResults(report) {
    return lodash_1.flatMap(report.results, result => {
        const filename = result.filePath;
        const pairs = result.messages
            .map(m => [m.ruleId, m])
            .filter(([ruleId, _m]) => ruleId);
        return pairs.map(([ruleId, m]) => {
            const line = m.line;
            const message = m.message;
            const patternId = patterns_1.patternIdToCodacy(ruleId);
            return new codacyResult_1.CodacyResult(filename, message, patternId, line);
        });
    });
}
exports.convertResults = convertResults;
function resultString(results) {
    const lines = results.map(result => JSON.stringify(result));
    return lines.join("\n");
}
exports.resultString = resultString;
//# sourceMappingURL=convertResults.js.map