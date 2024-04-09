import axios from "axios";
import { API_DATA } from "../../utils/constants/reverseGeocodingApiData";

const reversedGeocodingOptions = (latitude, longitude) => ({
    method: "GET",
    url: API_DATA.urls.reversedGeocoding,
    params: {
        latitude: latitude,
        longitude: longitude,
        range: "0",
    },
    headers: {
        "X-RapidAPI-Key": API_DATA.apiKey,
        "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
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
