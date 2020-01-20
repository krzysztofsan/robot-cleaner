const fs = require("fs");

module.exports = {
    loadConfig: (filePath) => {
        if (!filePath) {
            throw Error("Filename is empty!");
        }

        if (!fs.existsSync(filePath)) {
            throw Error("File doesn't exist!");
        }

        return new Promise((resolve) => {
            fs.readFile(filePath, "utf8", (error, data) => {
                if (error) {
                    throw Error(error);
                }
    
                const [ stepsCount, startingPosition, ...steps ] = data.split("\n");
                const config = {
                    stepsCount: Number(stepsCount),
                    x: Number(startingPosition.split(" ")[0]),
                    y: Number(startingPosition.split(" ")[1]),
                    steps: steps.map((step) => ({
                        direction: step.split(" ")[0],
                        distance: Number(step.split(" ")[1])
                    }))
                };

                resolve(config);
            });
        });
    }
}
