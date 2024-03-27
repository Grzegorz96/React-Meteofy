import axios from "axios";
import { API_DATA } from "../constants/openWeatherApiData";

const openWeatherOptions = (latitude, longitude) => ({
    method: "GET",
    url: API_DATA.urls.currentWeather,
    params: {
        lat: latitude,
        lon: longitude,
        appid: API_DATA.apiKey,
        units: API_DATA.units.metric,
    },
});

export const fetchWeatherData = async (latitude, longitude, data) => {
    try {
        const response = await axios.request(
            openWeatherOptions(latitude, longitude)
        );
        return {
            ...data,
            weatherInfo: response.data,
            loading: false,
        };
    } catch (error) {
        return {
            ...data,
            loading: false,
            error: error.message,
        };
    }
};
