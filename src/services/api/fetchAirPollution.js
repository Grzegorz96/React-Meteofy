import axios from "axios";
import { API_DATA } from "../../utils/constants/api/visualCrossingWeatherApiData";

const viasualCrossingWeatherOptions = (latitude, longitude) => ({
    method: "GET",
    url: `${API_DATA.url}/${latitude},${longitude}`,
    params: {
        key: API_DATA.apiKey,
        unitGroup: API_DATA.units.metric,
        include: "days,hours",
        contentType: "json",
        elements: "datetime,pm1,pm2p5,pm10,o3,no2,so2,co,aqius,aqieur",
    },
});

export const fetchAirPollution = async (latitude, longitude) => {
    try {
        const response = await axios.request(
            viasualCrossingWeatherOptions(latitude, longitude)
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error getting air pollution data: ${error.message}`);
    }
};
