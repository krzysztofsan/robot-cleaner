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

module.exports = {
    clean: (config) => {
        if (!config) {
            throw Error("Config has not been provided!");
        }

        if (!isConfigValid(config)) {
            throw Error("Config is invalid!");
        }

        const placesCount = 0;

        return `=> Cleaned: ${placesCount}`
    }
};
