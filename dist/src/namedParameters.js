"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const Patterns_1 = require("./model/Patterns");
function fromSchemaArray(objects) {
    return lodash_1.flatMap(objects, o => {
        const pairs = lodash_1.toPairs(o.properties);
        const haveDefault = pairs.filter(([k, v]) => v && v.hasOwnProperty("default"));
        return haveDefault.map(([k, v]) => new Patterns_1.PatternsParameter(k, v.default));
    });
}
exports.fromSchemaArray = fromSchemaArray;
//# sourceMappingURL=namedParameters.js.map