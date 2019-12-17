"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fromEslintCategoryToCategory(category) {
    switch (category) {
        case "Possible Errors":
            return "ErrorProne";
        case "Best Practices":
            return "BestPractice";
        case "Strict Mode":
            return "BestPractice";
        case "Variables":
            return "CodeStyle";
        case "Node.js and CommonJS":
            return "BestPractice";
        case "Stylistic Issues":
            return "CodeStyle";
        case "ECMAScript 6":
            return "BestPractice";
        case "Deprecated":
            return "Compatibility";
        case "Removed":
            return "Compatibility";
        default:
            return "CodeStyle";
    }
}
exports.fromEslintCategoryToCategory = fromEslintCategoryToCategory;
function fromEslintCategoryToLevel(category) {
    switch (category) {
        case "Possible Errors":
            return "Error";
        case "Best Practices":
            return "Info";
        case "Strict Mode":
            return "Error";
        case "Variables":
            return "Info";
        case "Node.js and CommonJS":
            return "Warning";
        case "Stylistic Issues":
            return "Info";
        case "ECMAScript 6":
            return "Warning";
        case "Deprecated":
            return "Info";
        case "Removed":
            return "Info";
        default:
            return "Info";
    }
}
exports.fromEslintCategoryToLevel = fromEslintCategoryToLevel;
function patternIdToCodacy(patternId) {
    return patternId.replace(/\//g, "_");
}
exports.patternIdToCodacy = patternIdToCodacy;
function patternIdToEslint(patternId) {
    return patternId.replace(/_/g, "/");
}
exports.patternIdToEslint = patternIdToEslint;
class PatternsParameter {
    constructor(name, d) {
        this.name = name;
        this.default = d;
    }
}
exports.PatternsParameter = PatternsParameter;
class PatternsEntry {
    constructor(patternId, level, category, parameters) {
        this.patternId = patternId;
        this.level = level;
        this.category = category;
        this.parameters = parameters;
    }
}
exports.PatternsEntry = PatternsEntry;
class Patterns {
    constructor(name, version, patterns) {
        this.name = name;
        this.version = version;
        this.patterns = patterns;
    }
}
exports.Patterns = Patterns;
//# sourceMappingURL=patterns.js.map