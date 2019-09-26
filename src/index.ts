export {}

import { CLIEngine, Linter } from 'eslint'
import fs  from 'fs'
import util from 'util'

let readFile = util.promisify(fs.readFile)

async function readJsonFile(configFile: string) {
  let result = await readFile(configFile)
}

function resultJson(results: CLIEngine.LintResult[]) {
  results.forEach (e => console.log(e))
}

let options: CLIEngine.Options = {
  configFile: '/Users/lorenzo/codacy/github.codacy-eslint-rewrite/src/.eslintrc'
}

let cli = new CLIEngine(options)

let result = cli.executeOnFiles(['/Users/lorenzo/openlayers/src/ol/proj/transforms.js'])

console.log(result.results)
