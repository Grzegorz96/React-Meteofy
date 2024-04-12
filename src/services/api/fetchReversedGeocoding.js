import axios from "axios";
import { API_DATA } from "../../utils/constants/geoApifyApiData";

const reversedGeocodingOptions = (latitude, longitude) => ({
    method: "GET",
    url: API_DATA.urls.reversedGeocoding,
    params: {
        lat: latitude,
        lon: longitude,
        apiKey: API_DATA.apiKey,
        format: "json",
    },
});

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