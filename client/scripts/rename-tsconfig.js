const fs = require("fs");

// This is the name of the tsconfig.json example file that we'll be copying and renaming.
const EXAMPLE_TSCONFIG_FILE_NAME = "tsconfig.json.example";
// Output file name must be "tsconfig.json"
const OUTPUT_TSCONFIG_FILE_NAME = "tsconfig.json";

fs.copyFile(
  EXAMPLE_TSCONFIG_FILE_NAME,
  OUTPUT_TSCONFIG_FILE_NAME,
  function (err) {
    if (err) {
      console.log(
        `Error copying ${EXAMPLE_TSCONFIG_FILE_NAME} to ${OUTPUT_TSCONFIG_FILE_NAME}: ${err}`
      );
    } else {
      console.log(
        `Copied ${EXAMPLE_TSCONFIG_FILE_NAME} to ${OUTPUT_TSCONFIG_FILE_NAME}`
      );
    }
  }
);
