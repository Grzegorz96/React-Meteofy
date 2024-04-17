import axios from "axios";
import { API_DATA } from "../../utils/constants/openWeatherApiData";

const openWeatherOptions = (cityObjects) => {
    return {
        method: "GET",
        url: API_DATA.url,
        params: {
            appid: API_DATA.apiKey,
            units: API_DATA.units.metric,
            id: cityObjects.map((city) => city.id).join(","),
            contentType: "json",
        },
    };
};

export const fetchCitiesWeather = async (cityObjects) => {
    try {
        const response = await axios.request(openWeatherOptions(cityObjects));
        return response.data;
    } catch (error) {
        throw new Error(`Error getting weather data: ${error.message}`);
    }
};
