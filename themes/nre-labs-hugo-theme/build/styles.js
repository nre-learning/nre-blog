const fs = require("fs").promises;
const path = require("path");
const less = require("less");
const rootStylesheet = "src/styles/styles.less";
const outputFilePath = "static/dist/styles.css";

(async function main() {
  const lessSheet = (await fs.readFile(rootStylesheet)).toString();
  const cssSheet = (await less.render(
    lessSheet,
    { filename: path.resolve(rootStylesheet) }
  )).css;

  await fs.writeFile(outputFilePath, cssSheet);
}());