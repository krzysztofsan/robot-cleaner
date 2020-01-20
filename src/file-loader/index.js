const fs = require("fs");

module.exports = {
    loadConfig: (filename) => {
        if (!filename) {
            throw Error("Filename is empty!");
        }

        fs.readFile(filename, "utf8", (error, data) => {
            if (error) {
                throw Error(error);
            }
        });
    }
}
