"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class CodacyResult {
    constructor(filename, message, patternId, line) {
        this.filename = filename;
        this.message = message;
        this.patternId = patternId;
        this.line = line;
    }
    relativeTo(directory) {
        const newFilename = path_1.relative(directory, this.filename);
        return new CodacyResult(newFilename, this.message, this.patternId, this.line);
    }
}
exports.CodacyResult = CodacyResult;
//# sourceMappingURL=codacyResult.js.map