import axios from "axios";
import { API_DATA } from "../../utils/constants/api/openMeteoApiData";

const openMeteoOptions = (latitude, longitude) => ({
    method: "GET",
    url: API_DATA.url,
    params: {
        latitude: latitude,
        longitude: longitude,
        past_days: "92",
        forecast_days: "92",
        daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max",
    },
});

export const fetchLongTermWeather = async (latitude, longitude) => {
    try {
        const response = await axios.request(
            openMeteoOptions(latitude, longitude)
        );
        return response.data;
    } catch (error) {
        throw new Error(
            `Error getting seasonal weather data: ${error.message}`
        );
    }
};
