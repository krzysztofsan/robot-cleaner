const robot = require(".");

describe("Robot", () => {
    it("should fail on providing an empty config", () => {
        expect(robot.clean).toThrow();
    })

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
    })
});
