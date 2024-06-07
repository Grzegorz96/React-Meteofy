import axios from "axios";
import { API_DATA } from "../../utils/constants/api/visualCrossingWeatherApiData";

/**
 * Returns the options object for fetching air pollution data from Visual Crossing Weather API.
 *
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Object} The options object for making the API request.
 */
const viasualCrossingWeatherOptions = (latitude, longitude) => ({
    method: "GET",
    url: `${API_DATA.url}/${latitude},${longitude}`,
    params: {
        key: import.meta.env.VITE_VISUAL_CROSSING_API_KEY,
        unitGroup: API_DATA.units.metric,
        include: "days,hours",
        contentType: "json",
        elements: "datetime,pm1,pm2p5,pm10,o3,no2,so2,co,aqius,aqieur",
    },
});

/**
 * Fetches air pollution data for a given latitude and longitude.
 *
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise<Object>} A promise that resolves to the air pollution data.
 * @throws {Error} If there is an error while fetching the data.
 */
export const fetchAirPollution = async (latitude, longitude) => {
    try {
        const response = await axios.request(
            viasualCrossingWeatherOptions(latitude, longitude)
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error getting air pollution data: ${error.message}`);
    }
};
