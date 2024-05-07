import axios from "axios";
import { API_DATA } from "../../utils/constants/api/visualCrossingWeatherApiData";

const viasualCrossingWeatherOptions = (latitude, longitude) => ({
    method: "GET",
    url: `${API_DATA.url}/${latitude},${longitude}`,
    params: {
        key: API_DATA.apiKey,
        unitGroup: API_DATA.units.metric,
        include: "days,hours,current",
        contentType: "json",
        iconSet: "icons2",
        elements:
            "datetime,temp,tempmax,tempmin,precipprob,windspeed,feelslike,conditions,icon,sunrise,sunset,humidity,pressure,visibility,dew,cloudcover",
    },
});

export const fetchWeather = async (latitude, longitude) => {
    try {
        const response = await axios.request(
            viasualCrossingWeatherOptions(latitude, longitude)
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error getting weather data: ${error.message}`);
    }
};
