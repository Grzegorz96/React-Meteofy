import axios from "axios";
import { API_DATA } from "../constants/openWeatherApiData";

const openWeatherOptions = (latitude, longitude) => ({
    method: "GET",
    url: API_DATA.urls.forecastWeather,
    params: {
        lat: latitude,
        lon: longitude,
        appid: API_DATA.apiKey,
        units: API_DATA.units.metric,
    },
});

export const fetchForecastWeather = async (latitude, longitude) => {
    try {
        const response = await axios.request(
            openWeatherOptions(latitude, longitude)
        );
        return response.data;
    } catch (error) {
        throw new Error(
            `Error getting forecast weather data: ${error.message}`
        );
    }
};
