/**
 * API data for Visual Crossing Weather API.
 * @typedef {Object} ApiData
 * @property {string} url - The URL of the Visual Crossing Weather API.
 * @property {Object} units - The units of measurement for the API.
 * @property {string} units.metric - The metric unit.
 * @property {string} units.imperial - The imperial unit.
 * @property {string} units.standard - The standard unit.
 */

/**
 * API data for Visual Crossing Weather API.
 * @type {ApiData}
 */
export const API_DATA = {
    url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
    units: {
        metric: "metric",
        imperial: "imperial",
        standard: "standard",
    },
};
