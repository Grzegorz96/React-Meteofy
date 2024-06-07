import axios from "axios";
import { API_DATA } from "../../utils/constants/api/geoApifyApiData";

/**
 * Returns the options object for reversed geocoding API request.
 *
 * @param {number} latitude - The latitude coordinate.
 * @param {number} longitude - The longitude coordinate.
 * @returns {Object} The options object for the API request.
 */
const reversedGeocodingOptions = (latitude, longitude) => ({
    method: "GET",
    url: API_DATA.urls.reversedGeocoding,
    params: {
        lat: latitude,
        lon: longitude,
        apiKey: import.meta.env.VITE_GEO_APIFY_API_KEY,
        format: "json",
    },
});

/**
 * Fetches the city name based on the provided latitude and longitude using a reverse geocoding API.
 *
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise<string>} The city name corresponding to the provided latitude and longitude.
 * @throws {Error} If there is an error while fetching the city name.
 */
export const fetchReversedGecoding = async (latitude, longitude) => {
    try {
        const response = await axios.request(
            reversedGeocodingOptions(latitude, longitude)
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error getting city name: ${error.message}`);
    }
};
