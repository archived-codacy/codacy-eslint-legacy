import packageJson from "../package.json"

export const toolName = "ESLint"

export const toolVersion = packageJson.dependencies.eslint.replace("^", "")
