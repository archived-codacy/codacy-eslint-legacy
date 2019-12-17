import { DocGenerator } from "./docGenerator"
import { writeFile } from "./fileUtils"
import { EOL } from "os"
import { defaultEngine } from "./eslintDefaultOptions"

main()

async function main() {
  const docGenerator = new DocGenerator(defaultEngine.getRules())

  console.log("Generate patterns.json")
  await writeJsonFile("docs/patterns.json", docGenerator.generatePatterns())

  console.log("Generate description.json")
  await writeJsonFile(
    "docs/description/description.json",
    docGenerator.generateDescriptionEntries()
  )

  const githubBaseUrl = "https://raw.githubusercontent.com"

  console.log("Generate eslint description files")
  await docGenerator.downloadDocs(
    pattern => `${githubBaseUrl}/eslint/eslint/master/docs/rules/${pattern}.md`
  )

  console.log("Generate vue description files")
  await docGenerator.downloadDocs(
    pattern =>
      `${githubBaseUrl}/vuejs/eslint-plugin-vue/master/docs/rules/${pattern}.md`,
    "vue"
  )

  console.log("Generate react description files")
  await docGenerator.downloadDocs(
    pattern =>
      `${githubBaseUrl}/yannickcr/eslint-plugin-react/master/docs/rules/${pattern}.md`,
    "react"
  )

  console.log("Generate lodash description files")
  await docGenerator.downloadDocs(
    pattern =>
      `${githubBaseUrl}/wix/eslint-plugin-lodash/master/docs/rules/${pattern}.md`,
    "lodash"
  )

  console.log("Generate node description files")
  await docGenerator.downloadDocs(pattern => {
    const patternFoldered = pattern.split("_").join("/")
    return `${githubBaseUrl}/mysticatea/eslint-plugin-node/master/docs/rules/${patternFoldered}.md`
  }, "node")

  console.log("Generate promise description files")
  await docGenerator.downloadDocs(
    pattern =>
      `${githubBaseUrl}/xjamundx/eslint-plugin-promise/master/docs/rules/${pattern}.md`,
    "promise"
  )

  console.log("Generate backbone description files")
  await docGenerator.downloadDocs(
    pattern =>
      `${githubBaseUrl}/ilyavolodin/eslint-plugin-backbone/master/docs/rules/${pattern}.md`,
    "backbone"
  )
}

function writeJsonFile(file: string, json: any): Promise<void> {
  return writeFile(file, JSON.stringify(json, null, 2) + EOL)
}
