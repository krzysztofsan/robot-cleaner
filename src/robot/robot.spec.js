const robot = require(".");

describe("Robot", () => {
    it("should return a formatted report from clean method", () => {
        expect(robot.clean()).toEqual("=> Cleaned: 0");
    })
});
