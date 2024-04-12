import axios from "axios";
import { API_DATA } from "../../utils/constants/openWeatherApiData";
import { polishCitiesData } from "../../utils/constants/polishCitiesData";

const openWeatherOptions = {
    method: "GET",
    url: API_DATA.url,
    params: {
        appid: API_DATA.apiKey,
        units: API_DATA.units.metric,
        id: polishCitiesData.map((city) => city.id).join(","),
        contentType: "json",
    },
};

export const fetchPolishCitiesWeather = async () => {
    try {
        const response = await axios.request(openWeatherOptions);
        return response.data;
    } catch (error) {
        throw new Error(`Error getting weather data: ${error.message}`);
    }
};
