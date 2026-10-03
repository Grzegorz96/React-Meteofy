import axios from 'axios';
import { API_DATA } from '../../utils/constants/api/visualCrossingWeatherApiData';

/**
 * Returns the options object for making a request to the Visual Crossing Weather API.
 *
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Object} The options object for making the API request.
 */
const visualCrossingWeatherOptions = (latitude, longitude) => ({
  method: 'GET',
  url: `${API_DATA.url}/${latitude},${longitude}`,
  params: {
    key: import.meta.env.VITE_VISUAL_CROSSING_API_KEY,
    unitGroup: API_DATA.units.metric,
    include: API_DATA.currentAndForecast.include,
    contentType: API_DATA.currentAndForecast.contentType,
    iconSet: API_DATA.currentAndForecast.iconSet,
    elements: API_DATA.currentAndForecast.elements,
  },
});

/**
 * Fetches the current and forecast weather data for the given latitude and longitude.
 *
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise<Object>} A promise that resolves to the weather data.
 * @throws {Error} If there is an error while fetching the weather data.
 */
export const fetchWeather = async (latitude, longitude) => {
  try {
    const response = await axios.request(
      visualCrossingWeatherOptions(latitude, longitude)
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error getting weather data: ${error.message}`);
  }
};
