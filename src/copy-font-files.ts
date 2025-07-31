const path = require("node:path")
const fs = require("fs")

const weights = [400, 600]
const styles = ["normal", "italic"]

for (const weight of weights) {
  for (const style of styles) {
    const fontFile = path.resolve(
      `node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-${weight}-${style}.woff`
    )
    const destination = path.resolve(`public/fonts/source-sans-3-latin-${weight}-${style}.woff`)

    fs.copyFile(fontFile, destination, (error: Error | null) => {
      error instanceof Error && console.error("Failed to copy font file: " + fontFile)
    })
  }
}
