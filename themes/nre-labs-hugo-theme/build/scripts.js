const fs = require("fs").promises;
const scriptDir = 'src/js/';
const bundleFilePath = 'static/dist/theme.js';

async function concatScripts() {
  const scriptNames = await fs.readdir(scriptDir);
  const scriptReads = scriptNames.map((name) => fs.readFile(scriptDir + name));
  const scripts = await Promise.all(scriptReads);
  return scripts.join("\n\n");
}

async function writeBundle(bundle) {
  await fs.writeFile(bundleFilePath, bundle);
}

(async function main() {
  await writeBundle(await concatScripts());
}());
