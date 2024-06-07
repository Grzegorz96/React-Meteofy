import { aqiUSData } from "./constants/aqiUSData";
import { startOfDay, addDays } from "date-fns";

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
