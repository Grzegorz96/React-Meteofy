import axios from "axios";
import { API_DATA } from "../../utils/constants/openMeteoApiData";

const openMeteoOptions = (latitude, longitude) => ({
    method: "GET",
    url: API_DATA.url,
    params: {
        latitude: latitude,
        longitude: longitude,
        daily: "temperature_2m_max",
        past_days: "92",
        forecast_days: "155",
    },
});

export const fetchSeasonalWeather = async (latitude, longitude) => {
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
