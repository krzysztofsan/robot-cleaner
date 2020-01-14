const robot = require("../robot");

describe("Robot", () => {
    it("should return a greeting text", () => {
        expect(robot.greet()).toEqual("hi.");
    })
});
