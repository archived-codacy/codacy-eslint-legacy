"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docGenerator_1 = require("../docGenerator");
const fileUtils_1 = require("../fileUtils");
const os_1 = require("os");
const eslintDefaultOptions_1 = require("../eslintDefaultOptions");
const docGenerator = new docGenerator_1.DocGenerator(eslintDefaultOptions_1.defaultEngine.getRules());
describe("DocGenerator", () => {
    it("should generate patterns.json", () => {
        const patterns = docGenerator.generatePatterns();
        return fileUtils_1.writeFile("docs/patterns.json", JSON.stringify(patterns, null, 2) + os_1.EOL);
    });
    it("should generate description.json", () => {
        const patterns = docGenerator.generateDescriptionEntries();
        return fileUtils_1.writeFile("docs/description/description.json", JSON.stringify(patterns, null, 2) + os_1.EOL);
    });
    const githubBaseUrl = "https://raw.githubusercontent.com";
    it("should generate eslint description files", () => {
        return docGenerator.downloadDocs(pattern => `${githubBaseUrl}/eslint/eslint/master/docs/rules/${pattern}.md`);
    });
    it("should generate vue description files", () => {
        return docGenerator.downloadDocs(pattern => `${githubBaseUrl}/vuejs/eslint-plugin-vue/master/docs/rules/${pattern}.md`, "vue");
    });
    it("should generate react description files", () => {
        return docGenerator.downloadDocs(pattern => `${githubBaseUrl}/yannickcr/eslint-plugin-react/master/docs/rules/${pattern}.md`, "react");
    });
    it("should generate lodash description files", () => {
        return docGenerator.downloadDocs(pattern => `${githubBaseUrl}/wix/eslint-plugin-lodash/master/docs/rules/${pattern}.md`, "lodash");
    });
    it("should generate node description files", () => {
        return docGenerator.downloadDocs(pattern => {
            const patternFoldered = pattern.split("_").join("/");
            return `${githubBaseUrl}/mysticatea/eslint-plugin-node/master/docs/rules/${patternFoldered}.md`;
        }, "node");
    });
    it("should generate promise description files", () => {
        return docGenerator.downloadDocs(pattern => `${githubBaseUrl}/xjamundx/eslint-plugin-promise/master/docs/rules/${pattern}.md`, "promise");
    });
    it("should generate backbone description files", () => {
        return docGenerator.downloadDocs(pattern => `${githubBaseUrl}/ilyavolodin/eslint-plugin-backbone/master/docs/rules/${pattern}.md`, "backbone");
    });
});
//# sourceMappingURL=docGenerator.spec.js.map