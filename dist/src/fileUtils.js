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
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const fs_walk_1 = require("@nodelib/fs.walk");
exports.readFile = util_1.promisify(fs_1.default.readFile);
exports.writeFile = util_1.promisify(fs_1.default.writeFile);
exports.walk = util_1.promisify(fs_walk_1.walk);
function readJsonFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield exports.readFile(file, "utf8");
        }
        catch (e) {
            console.error(`Error reading ${file} file`);
            return undefined;
        }
    });
}
exports.readJsonFile = readJsonFile;
function parseCodacyrcFile(content) {
    return JSON.parse(content);
}
exports.parseCodacyrcFile = parseCodacyrcFile;
function allFilesNames(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        const entries = yield exports.walk(dir, { followSymbolicLinks: true });
        return entries.map(entry => entry.name);
    });
}
exports.allFilesNames = allFilesNames;
//# sourceMappingURL=fileUtils.js.map