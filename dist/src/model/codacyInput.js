"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parameter {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
exports.Parameter = Parameter;
class Pattern {
    constructor(patternId, parameters) {
        this.patternId = patternId;
        this.parameters = parameters;
    }
}
exports.Pattern = Pattern;
class Tool {
    constructor(name, patterns) {
        this.name = name;
        this.patterns = patterns;
    }
}
exports.Tool = Tool;
class Codacyrc {
    constructor(files, tools) {
        this.files = files;
        this.tools = tools;
    }
}
exports.Codacyrc = Codacyrc;
//# sourceMappingURL=codacyInput.js.map