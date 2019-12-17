"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const namedParameters_1 = require("../namedParameters");
const Patterns_1 = require("../model/Patterns");
describe("namedParameters", () => {
    describe("fromSchemaArray", () => {
        it("should generate PatternParameters[]", () => {
            const schemaArray = [
                {
                    type: "object",
                    properties: {
                        getWithoutSet: {
                            type: "boolean",
                            default: false
                        },
                        setWithoutGet: {
                            type: "boolean",
                            default: true
                        },
                        enforceForClassMembers: {
                            type: "boolean",
                            default: false
                        }
                    },
                    additionalProperties: false
                }
            ];
            const expectedResult = [
                new Patterns_1.PatternsParameter("getWithoutSet", false),
                new Patterns_1.PatternsParameter("setWithoutGet", true),
                new Patterns_1.PatternsParameter("enforceForClassMembers", false)
            ];
            assert_1.deepEqual(namedParameters_1.fromSchemaArray(schemaArray), expectedResult);
        });
    });
});
//# sourceMappingURL=namedParameters.spec.js.map