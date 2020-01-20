const robot = require(".");

describe("Robot", () => {
    it("should fail on providing an empty config", () => {
        expect(robot.clean).toThrow();
    });

    it("should fail on providing an invalid config", () => {
        const invalidConfigs = [
            {}, {
                x: 0,
                y: 0,
                steps: [],
                stepsCount: 1
            }
        ]
        
        for (invalidConfig of invalidConfigs) {
            expect(() => robot.clean(invalidConfig)).toThrow();
        }
    });

    it("should return a cleaning report for a simple config", () => {
        const config = {
            x: 0,
            y: 0,
            stepsCount: 1,
            steps: [{
                direction: "E",
                distance: 1
            }]
        };

        expect(robot.clean(config)).toEqual("=> Cleaned: 2");
    });

    it("should display a correct cleaning report for a non coliding path", () => {
        const config = {
            x: 0,
            y: 0,
            stepsCount: 4,
            steps: [{
                direction: "N",
                distance: 2
            }, {
                direction: "W",
                distance: 2
            }, {
                direction: "N",
                distance: 2
            }, {
                direction: "E",
                distance: 2
            }]
        };

        expect(robot.clean(config)).toEqual("=> Cleaned: 9");
    });

    it("should include only unique places in the cleaning report", () => {
        const config = {
            x: 0,
            y: 0,
            stepsCount: 4,
            steps: [{
                direction: "N",
                distance: 1
            }, {
                direction: "S",
                distance: 1
            }, {
                direction: "N",
                distance: 1
            }, {
                direction: "S",
                distance: 1
            }]
        };

        expect(robot.clean(config)).toEqual("=> Cleaned: 2");
    });
});
