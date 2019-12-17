import { CLIEngine } from "eslint"
import { configCreator } from "./configCreator"
import { convertResults, resultString } from "./convertResults"
import { parseCodacyrcFile, readJsonFile } from "./fileUtils"
import { parseTimeoutSeconds } from "./parseTimeoutSeconds"

const timeoutHandle = setTimeout(() => {
  console.error("Timeout occurred. Exiting.")
  process.exit(2)
}, parseTimeoutSeconds(process.env.TIMEOUT) * 1000)

async function run() {
  const jsonFile = await readJsonFile("/.codacyrc")

  const codacyrc = jsonFile ? parseCodacyrcFile(jsonFile) : undefined

  const srcDirPath = "/src"

  const [options, files] = await configCreator(codacyrc)

  options.resolvePluginsRelativeTo = "."

  options.cwd = srcDirPath

  const filesToAnalyze = files.length > 0 ? files : ["/src/**"]

  const engine = new CLIEngine(options)

  const eslintResults = engine.executeOnFiles(filesToAnalyze)

  const codacyResults = convertResults(eslintResults)

  const relativeCodacyResults = codacyResults.map(r => r.relativeTo(srcDirPath))

  const lines = resultString(relativeCodacyResults)

  console.log(lines)
}

run()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => clearTimeout(timeoutHandle))
