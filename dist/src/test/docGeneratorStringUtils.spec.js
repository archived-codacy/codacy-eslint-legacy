"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocGeneratorStringUtils_1 = require("../DocGeneratorStringUtils");
const assert_1 = require("assert");
describe("DocGeneratorStringUtils", () => {
    describe("capitalize", () => {
        it("should capitalize strings", () => {
            assert_1.equal(DocGeneratorStringUtils_1.capitalize("hey there"), "Hey there");
        });
        it("should not touch already capitalized strings", () => {
            assert_1.equal(DocGeneratorStringUtils_1.capitalize("Hey there"), "Hey there");
        });
    });
    describe("patternTitle", () => {
        it("should create proper titles from patterns", () => {
            assert_1.equal(DocGeneratorStringUtils_1.patternTitle("example-eslint-pattern"), "Example eslint pattern");
        });
        it("should manage families properly", () => {
            assert_1.equal(DocGeneratorStringUtils_1.patternTitle("family/example-eslint-pattern"), "Family: Example eslint pattern");
        });
        it("should manage families and subfamilies properly", () => {
            assert_1.equal(DocGeneratorStringUtils_1.patternTitle("family/subfamily/example-eslint-pattern"), "Family: [Subfamily] Example eslint pattern");
        });
    });
});
//# sourceMappingURL=docGeneratorStringUtils.spec.js.map