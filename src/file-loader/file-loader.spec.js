const path = require("path");
const fileLoader = require(".");

describe("File loader", () => { 
    it("should fail on loading an nonexisting file", () => {
        const filePath = path.resolve("./configs/mocks/non-existing-file.conf");

        expect(() => fileLoader.loadConfig(filePath)).toThrow();
    });

    it("should load a simple short configuration file", () => {
        const filePath = path.resolve("./configs/mocks/sample-config.conf");
        const expectedConfig = {
            x: 10,
            y: 22,
            stepsCount: 2,
            steps: [{
                direction: "E",
                distance: 2
            }, {
                direction: "N",
                distance: 1
            }]
        };

        expect(fileLoader.loadConfig(filePath))
            .resolves
            .toEqual(expectedConfig);
    });
});
