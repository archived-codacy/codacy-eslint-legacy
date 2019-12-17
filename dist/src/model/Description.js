"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DescriptionParameter {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
exports.DescriptionParameter = DescriptionParameter;
class DescriptionEntry {
    constructor(patternId, title, description, timeToFix, parameters) {
        this.patternId = patternId;
        this.title = title;
        this.description = description;
        this.timeToFix = timeToFix;
        this.parameters = parameters;
    }
}
exports.DescriptionEntry = DescriptionEntry;
//# sourceMappingURL=Description.js.map