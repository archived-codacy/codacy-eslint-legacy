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
const eslint_1 = require("eslint");
const configCreator_1 = require("./configCreator");
const convertResults_1 = require("./convertResults");
const fileUtils_1 = require("./fileUtils");
const parseTimeoutSeconds_1 = require("./parseTimeoutSeconds");
const timeoutHandle = setTimeout(() => {
    console.error("Timeout occurred. Exiting.");
    process.exit(2);
}, parseTimeoutSeconds_1.parseTimeoutSeconds(process.env.TIMEOUT) * 1000);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const jsonFile = yield fileUtils_1.readJsonFile("/.codacyrc");
        const codacyrc = jsonFile ? fileUtils_1.parseCodacyrcFile(jsonFile) : undefined;
        const srcDirPath = "/src";
        const [options, files] = yield configCreator_1.configCreator(codacyrc);
        options.resolvePluginsRelativeTo = ".";
        options.cwd = srcDirPath;
        const filesToAnalyze = files.length > 0 ? files : ["/src/**"];
        const engine = new eslint_1.CLIEngine(options);
        const eslintResults = engine.executeOnFiles(filesToAnalyze);
        const codacyResults = convertResults_1.convertResults(eslintResults);
        const relativeCodacyResults = codacyResults.map(r => r.relativeTo(srcDirPath));
        const lines = convertResults_1.resultString(relativeCodacyResults);
        console.log(lines);
    });
}
run()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(() => clearTimeout(timeoutHandle));
//# sourceMappingURL=index.js.map