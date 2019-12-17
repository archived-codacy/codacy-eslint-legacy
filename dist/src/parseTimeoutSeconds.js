"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTimeout = 15 * 60;
function parseTimeoutSeconds(timeoutString) {
    if (!timeoutString)
        return exports.defaultTimeout;
    const l = timeoutString
        .replace(".", " ")
        .split(" ")
        .filter(i => i); // remove empty strings
    if (l.length !== 2)
        return exports.defaultTimeout;
    const number = parseInt(l[0]);
    const timeUnit = l[1];
    if (isNaN(number))
        return exports.defaultTimeout;
    switch (timeUnit) {
        case "second":
        case "seconds":
            return number;
        case "minute":
        case "minutes":
            return number * 60;
        case "hour":
        case "hours":
            return number * 60 * 60;
        default:
            return exports.defaultTimeout;
    }
}
exports.parseTimeoutSeconds = parseTimeoutSeconds;
//# sourceMappingURL=parseTimeoutSeconds.js.map