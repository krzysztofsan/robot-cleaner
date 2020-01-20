const fileLoader = require("./file-loader");
const robot = require("./robot");

try {
    const inputFilePath = process.argv[2];

    fileLoader.loadConfig(inputFilePath).then((config) => {
        const cleaningReport = robot.clean(config);

        console.log(cleaningReport);
    });
} catch (error) {
    console.error("[ERROR] An error occurred: ", error);
    process.exit(1);
}
