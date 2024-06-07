import axios from "axios";
import { API_DATA } from "../../utils/constants/api/openWeatherApiData";

/**
 * Generates options object for making a request to the OpenWeather API.
 *
 * @param {Array<Object>} cityObjects - An array of city objects.
 * @returns {Object} Options object for making the API request.
 */
const openWeatherOptions = (cityObjects) => ({
    method: "GET",
    url: API_DATA.url,
    params: {
        appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        units: API_DATA.units.metric,
        id: cityObjects.map((city) => city.id).join(","),
        contentType: "json",
    },
});

/**
 * Fetches weather data for multiple cities.
 *
 * @param {Array} cityObjects - An array of city objects.
 * @returns {Promise} A promise that resolves to the weather data.
 * @throws {Error} If there is an error getting the weather data.
 */
export const fetchCitiesWeather = async (cityObjects) => {
    try {
        const response = await axios.request(openWeatherOptions(cityObjects));
        return response.data;
    } catch (error) {
        throw new Error(`Error getting weather data: ${error.message}`);
    }
};
