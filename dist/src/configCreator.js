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
const eslintDefaultOptions_1 = require("./eslintDefaultOptions");
const toolMetadata_1 = require("./toolMetadata");
const patterns_1 = require("./model/patterns");
const lodash_1 = require("lodash");
function patternsToRules(patterns) {
    const pairs = patterns.map(pattern => {
        const patternId = patterns_1.patternIdToEslint(pattern.patternId);
        if (pattern.parameters) {
            const [unnamedParameters, namedParameters] = lodash_1.partition(pattern.parameters, p => p.name === "unnamedParam");
            const namedOptions = lodash_1.fromPairs(namedParameters.map(p => [p.name, p.value]));
            const unnamedOptions = unnamedParameters.map(p => p.value);
            return [
                patternId,
                lodash_1.isEmpty(namedOptions)
                    ? ["error", ...unnamedOptions]
                    : ["error", ...unnamedOptions, namedOptions]
            ];
        }
        else {
            return [patternId, "error"];
        }
    });
    return lodash_1.fromPairs(pairs);
}
function createOptions(codacyInput) {
    return __awaiter(this, void 0, void 0, function* () {
        if (codacyInput && codacyInput.tools) {
            const eslintTool = codacyInput.tools.find(tool => tool.name === toolMetadata_1.toolName);
            if (eslintTool && eslintTool.patterns) {
                const patterns = eslintTool.patterns;
                const result = lodash_1.cloneDeep(eslintDefaultOptions_1.defaultOptions);
                if (result.baseConfig) {
                    result.baseConfig.extends = [];
                    result.baseConfig.overrides.extends = [];
                    result.baseConfig.rules = patternsToRules(patterns);
                }
                result.useEslintrc = false;
                return result;
            }
        }
        return {};
    });
}
function configCreator(codacyInput) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = createOptions(codacyInput);
        const files = codacyInput && codacyInput.files ? codacyInput.files : [];
        return [yield options, files];
    });
}
exports.configCreator = configCreator;
//# sourceMappingURL=configCreator.js.map