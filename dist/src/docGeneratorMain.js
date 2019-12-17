"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocGenerator_1 = require("./DocGenerator");
const fileUtils_1 = require("./fileUtils");
const os_1 = require("os");
const eslintDefaultOptions_1 = require("./eslintDefaultOptions");
function writeJsonFile(file, json) {
    return fileUtils_1.writeFile(file, JSON.stringify(json, null, 2) + os_1.EOL);
}
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const docGenerator = new DocGenerator_1.DocGenerator(eslintDefaultOptions_1.defaultEngine.getRules());
        console.log("Generate patterns.json");
        yield writeJsonFile("docs/patterns.json", docGenerator.generatePatterns());
        console.log("Generate description.json");
        yield writeJsonFile("docs/description/description.json", docGenerator.generateDescriptionEntries());
        const githubBaseUrl = "https://raw.githubusercontent.com";
        console.log("Generate eslint description files");
        yield docGenerator.downloadDocs(pattern => `${githubBaseUrl}/eslint/eslint/master/docs/rules/${pattern}.md`);
        console.log("Generate vue description files");
        yield docGenerator.downloadDocs(pattern => `${githubBaseUrl}/vuejs/eslint-plugin-vue/master/docs/rules/${pattern}.md`, "vue");
        console.log("Generate react description files");
        yield docGenerator.downloadDocs(pattern => `${githubBaseUrl}/yannickcr/eslint-plugin-react/master/docs/rules/${pattern}.md`, "react");
        console.log("Generate lodash description files");
        yield docGenerator.downloadDocs(pattern => `${githubBaseUrl}/wix/eslint-plugin-lodash/master/docs/rules/${pattern}.md`, "lodash");
        console.log("Generate node description files");
        yield docGenerator.downloadDocs(pattern => {
            const patternFoldered = pattern.split("_").join("/");
            return `${githubBaseUrl}/mysticatea/eslint-plugin-node/master/docs/rules/${patternFoldered}.md`;
        }, "node");
        console.log("Generate promise description files");
        yield docGenerator.downloadDocs(pattern => `${githubBaseUrl}/xjamundx/eslint-plugin-promise/master/docs/rules/${pattern}.md`, "promise");
        console.log("Generate backbone description files");
        yield docGenerator.downloadDocs(pattern => `${githubBaseUrl}/ilyavolodin/eslint-plugin-backbone/master/docs/rules/${pattern}.md`, "backbone");
    });
}
//# sourceMappingURL=docGeneratorMain.js.map