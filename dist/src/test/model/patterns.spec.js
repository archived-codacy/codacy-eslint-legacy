"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Patterns_1 = require("../../model/Patterns");
const assert_1 = require("assert");
describe("Patterns", () => {
    it("should convert patternId from Codacy to Eslint format", () => {
        assert_1.equal(Patterns_1.patternIdToEslint("family_subfamily_ruleId"), "family/subfamily/ruleId");
    });
    it("should convert patternId from Eslint to Codacy format", () => {
        assert_1.equal(Patterns_1.patternIdToCodacy("family/subfamily/ruleId"), "family_subfamily_ruleId");
    });
});
//# sourceMappingURL=patterns.spec.js.map