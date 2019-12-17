"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const baseConfigs = ["standard", "plugin:security/recommended"];
const typescriptConfigs = [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
];
exports.defaultOptions = {
    baseConfig: {
        extends: baseConfigs,
        env: {
            es6: true,
            node: true,
            browser: true,
            commonjs: true,
            jquery: true,
            phantomjs: true,
            jasmine: true,
            mocha: true,
            amd: true,
            worker: true,
            qunit: true
        },
        plugins: [
            "angular",
            "babel",
            "backbone",
            "compat",
            "chai-friendly",
            "flowtype",
            "html",
            "import",
            "jsx-a11y",
            "lodash",
            "lodash-fp",
            "meteor",
            "mocha",
            "mongodb",
            "no-unsafe-innerhtml",
            "node",
            "promise",
            "react",
            "react-hooks",
            "security",
            "standard",
            "vue",
            "@typescript-eslint",
            "relay"
        ],
        parser: "babel-eslint",
        overrides: [
            {
                files: ["**/*.ts", "**/*.tsx"],
                extends: baseConfigs.concat(typescriptConfigs),
                parser: "@typescript-eslint/parser"
            }
        ]
    }
};
exports.defaultEngine = new eslint_1.CLIEngine(exports.defaultOptions);
//# sourceMappingURL=eslintDefaultOptions.js.map