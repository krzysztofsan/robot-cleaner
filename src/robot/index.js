const _ = require("lodash");

/*
 *  config:       
 *      - x: number
 *      - y: number
 *      - stepsCount: number
 *      - steps: Array<{
 *           direction: 'N' | 'E' | 'S' | 'W'
 *           distance: number
 *        }>
 */

const isConfigValid = ({ x, y, stepsCount, steps }) => 
    (_.isNil(x) || _.isNil(y) || stepsCount !== steps.length) ? false : true;

const getNewPosition = (position, direction) => {
    switch (direction) {
        case "N":
            return {
                ...position,
                y: position.y + 1
            }
        case "E":
            return {
                ...position,
                x: position.x + 1
            }
        case "S":
            return {
                ...position,
                y: position.y - 1
            }
        case "W":
            return {
                ...position,
                x: position.x - 1
            }
        default:
            throw Error("Invalid direction!");
    }
}

module.exports = {
    clean: (config) => {
        if (!config) {
            throw Error("Config has not been provided!");
        }

        if (!isConfigValid(config)) {
            throw Error("Config is invalid!");
        }

        const { steps, x, y } = config;
        let currentPosition = { x, y };
        const visitedPlaces = [ currentPosition ];

        for (let { direction, distance } of steps) {
            for (let i = 0; i < distance; i++) {
                currentPosition = getNewPosition(currentPosition, direction);

                if (visitedPlaces.every(({ x, y }) => currentPosition.x !== x || currentPosition.y !== y)) {
                    visitedPlaces.push(currentPosition);
                }
            }
        }

        return `=> Cleaned: ${visitedPlaces.length}`;
    }
};
