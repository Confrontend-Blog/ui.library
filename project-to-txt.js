const fs = require("fs");
const path = require("path");
const readline = require("readline");

let processedFiles = 0;

function createProgressBar(total) {
  return {
    render() {
      const percentage = (processedFiles / total) * 100;
      const progressBarSize = 50;
      const filledSize = Math.round((percentage / 100) * progressBarSize);
      const progressBar =
        "█".repeat(filledSize) + "░".repeat(progressBarSize - filledSize);
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(
        `Processing: [${progressBar}] ${percentage.toFixed(2)}%`
      );
    },
  };
}

function getAllFiles(dirPath, extensions, ignorePattern, filesArray = []) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (ignorePattern && ignorePattern.test(file)) continue;

    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      getAllFiles(filePath, extensions, ignorePattern, filesArray);
    } else if (extensions.includes(path.extname(file))) {
      filesArray.push(filePath);
    }
  }

  return filesArray;
}

function concatenateFiles(files, outputFile) {
  const progressBar = createProgressBar(files.length);

  const writeStream = fs.createWriteStream(outputFile, { flags: "a" });

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    writeStream.write(content + "\n\n");
    processedFiles++;
    progressBar.render();
  });

  writeStream.end();
  console.log("\nProcessing complete!");
}

const directoryPath = "./src"; // Update this
const extensions = [".js", ".jsx", ".ts", ".tsx", ".css"]; // Update this if needed
const ignorePattern = /ignore_this_pattern/; // Update this if needed
const outputFile = "project-as-text.txt";

const allFiles = getAllFiles(directoryPath, extensions, ignorePattern);
concatenateFiles(allFiles, outputFile);
