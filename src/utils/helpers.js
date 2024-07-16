import { aqiUSData } from "./constants/aqiUSData";
import { startOfDay, addDays, subDays } from "date-fns";

/**
 * Retrieves the AQI US data based on the given AQI value.
 * @param {number} aqiValue - The AQI value to retrieve the data for.
 * @returns {object|null} The AQI US data object that matches the given AQI value, or null if the value is invalid.
 */
export function getAqiUSData(aqiValue) {
    if (aqiValue === null || isNaN(aqiValue)) {
        return null;
    }

    const lastIndex = aqiUSData.length - 1;

    // Check if the AQI value is greater than the highest value in the data.
    if (aqiValue >= aqiUSData[lastIndex].aqiUSLevel[0]) {
        return aqiUSData[lastIndex];
    }

    // Find the AQI data that matches the given value.
    return aqiUSData.find((data) => {
        return aqiValue >= data.aqiUSLevel[0] && aqiValue <= data.aqiUSLevel[1];
    });
}

/**
 * Default coordinates for a city.
 * @type {Object}
 * @property {number} latitude - The latitude of the city.
 * @property {number} longitude - The longitude of the city.
 */
export const defaultCityCoords = {
    latitude: 52.22977,
    longitude: 21.01178,
};

/**
 * Returns the default date range.
 * @returns {Array<Date>} An array containing the start and end dates of the default range.
 */
export const getDefaultDateRange = () => {
    return [startOfDay(new Date()), startOfDay(addDays(new Date(), 44))];
};

/**
 * Object representing the delay settings for requesting a city.
 * @typedef {Object} RequestCityDelay
 * @property {number} lastRequestTime - The timestamp of the last request.
 * @property {number} minRequestInterval - The minimum interval between requests in milliseconds.
 */

/**
 * The requestCityDelay object stores the delay settings for requesting a city.
 * @type {RequestCityDelay}
 */
export const requestCityDelay = {
    lastRequestTime: 0,
    minRequestInterval: 1300,
};

/**
 * Returns an array of date ranges.
 * @param {boolean} moveRangesToBottom Indicates whether to move the ranges to the bottom or left.
 * @returns {Array} An array of date ranges.
 */
export const getRanges = (moveRangesToBottom) => {
    return [
        {
            label: "last 7 Days",
            value: [startOfDay(subDays(new Date(), 6)), startOfDay(new Date())],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "last 30 Days",
            value: [
                startOfDay(subDays(new Date(), 29)),
                startOfDay(new Date()),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "last 90 Days",
            value: [
                startOfDay(subDays(new Date(), 89)),
                startOfDay(new Date()),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "next 7 Days",
            value: [startOfDay(new Date()), startOfDay(addDays(new Date(), 6))],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "next 30 Days",
            value: [
                startOfDay(new Date()),
                startOfDay(addDays(new Date(), 29)),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "next 90 Days",
            value: [
                startOfDay(new Date()),
                startOfDay(addDays(new Date(), 89)),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
    ];
};
