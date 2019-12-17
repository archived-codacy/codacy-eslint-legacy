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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const node_fetch_1 = __importDefault(require("node-fetch"));
const Description_1 = require("./model/Description");
const Patterns_1 = require("./model/Patterns");
const namedParameters_1 = require("./namedParameters");
const toolMetadata_1 = require("./toolMetadata");
const fileUtils_1 = require("./fileUtils");
const DocGeneratorStringUtils_1 = require("./DocGeneratorStringUtils");
class DocGenerator {
    constructor(rules) {
        this.rules = rules;
    }
    generatePatterns() {
        const entries = lodash_1.flatMap(Array.from(this.rules.entries()), ([patternId, ruleModule]) => {
            const meta = ruleModule && ruleModule.meta ? ruleModule.meta : undefined;
            const eslintCategory = meta && meta.docs ? meta.docs.category : undefined;
            const level = Patterns_1.fromEslintCategoryToLevel(eslintCategory);
            const category = patternId.includes("security")
                ? "Security"
                : Patterns_1.fromEslintCategoryToCategory(eslintCategory);
            const parameters = meta && meta.schema
                ? this.fromEslintSchemaToParameters(meta.schema)
                : undefined;
            return new Patterns_1.PatternsEntry(Patterns_1.patternIdToCodacy(patternId), level, category, parameters && parameters.length > 0 ? parameters : undefined);
        });
        return new Patterns_1.Patterns(toolMetadata_1.toolName, toolMetadata_1.toolVersion, entries);
    }
    generateDescriptionEntries() {
        return lodash_1.flatMap(Array.from(this.rules.entries()), ([patternId, ruleModule]) => {
            const eslintDescription = ruleModule && ruleModule.meta && ruleModule.meta.docs
                ? ruleModule.meta.docs.description
                : undefined;
            const description = eslintDescription
                ? DocGeneratorStringUtils_1.capitalize(eslintDescription)
                : "";
            const title = DocGeneratorStringUtils_1.patternTitle(patternId);
            const timeToFix = 5;
            return new Description_1.DescriptionEntry(Patterns_1.patternIdToCodacy(patternId), title, description, timeToFix);
        });
    }
    fromEslintSchemaToParameters(schema) {
        const anyOfToArray = (schema) => schema.anyOf ? schema.anyOf : [schema];
        const flattenSchema = lodash_1.flatMapDeep(schema, anyOfToArray);
        if (Array.isArray(flattenSchema)) {
            const objects = flattenSchema.filter(value => value && value.properties);
            return namedParameters_1.fromSchemaArray(objects);
        }
        else
            return [];
    }
    patternIdsWithoutPrefix(prefix) {
        const longPrefix = prefix + "/";
        const patternIds = Array.from(this.rules.entries()).map(e => e[0]);
        const filteredPatternIds = patternIds.filter(patternId => patternId.startsWith(longPrefix));
        return filteredPatternIds.map(patternId => patternId.substring(longPrefix.length));
    }
    eslintPatternIds() {
        // All third party plugins' rules start with plugin's name followed by slash
        return Array.from(this.rules.keys()).filter(e => !e.includes("/"));
    }
    downloadDocs(urlFromPatternId, prefix = "") {
        const patterns = prefix.length > 0
            ? this.patternIdsWithoutPrefix(prefix)
            : this.eslintPatternIds();
        const promises = patterns.map((pattern) => __awaiter(this, void 0, void 0, function* () {
            const url = urlFromPatternId(pattern);
            const result = yield node_fetch_1.default(url);
            if (result.ok) {
                const text = yield result.text();
                const filename = "docs/description/" +
                    (prefix.length > 0 ? prefix + "_" : "") +
                    Patterns_1.patternIdToCodacy(pattern) +
                    ".md";
                return fileUtils_1.writeFile(filename, text);
            }
            else
                return Promise.reject(`Failed to retrieve docs for ${pattern} from ${url}`);
        }));
        return Promise.all(promises);
    }
}
exports.DocGenerator = DocGenerator;
//# sourceMappingURL=docGenerator.js.map