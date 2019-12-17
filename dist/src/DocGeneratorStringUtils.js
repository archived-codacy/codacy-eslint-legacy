"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
exports.capitalize = capitalize;
function patternTitle(patternId) {
    const parts = patternId.split("/").map(s => capitalize(s)
        .split("-")
        .join(" "));
    let res;
    if (parts.length > 2) {
        const family = parts[0];
        const subfamilies = parts.slice(1, parts.length - 1).map(s => `[${s}]`);
        const name = parts[parts.length - 1];
        res = [family, subfamilies.concat(name).join(" ")];
    }
    else {
        res = parts;
    }
    return res.join(": ");
}
exports.patternTitle = patternTitle;
//# sourceMappingURL=DocGeneratorStringUtils.js.map