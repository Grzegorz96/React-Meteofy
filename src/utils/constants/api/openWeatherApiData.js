/**
 * API data for OpenWeatherMap.
 * @typedef {Object} ApiData
 * @property {string} url - The URL of the OpenWeatherMap API.
 * @property {Object} units - The units of measurement for temperature.
 * @property {string} units.metric - The metric unit for temperature.
 * @property {string} units.imperial - The imperial unit for temperature.
 * @property {string} units.standard - The standard unit for temperature.
 */

/**
 * API data for OpenWeatherMap.
 * @type {ApiData}
 */
export const API_DATA = {
    url: "https://api.openweathermap.org/data/2.5/group",
    units: {
        metric: "metric",
        imperial: "imperial",
        standard: "standard",
    },
};
