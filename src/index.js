const fileLoader = require("./file-loader");
const robot = require("./robot");

try {
    const inputFilename = process.argv[2];
    const config = fileLoader.loadConfig(inputFilename);

    robot.clean(config);
} catch (error) {
    console.error("[ERROR] An error occurred: ", error);
    process.exit(1);
}
