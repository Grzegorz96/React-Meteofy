import axios from "axios";
import { API_DATA } from "../constants/geoDbApiData";

const geoApiOptions = (inputValue) => ({
    method: "GET",
    url: API_DATA.urls.cities,
    headers: {
        "X-RapidAPI-Key": API_DATA.apiKey,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
    params: {
        limit: "10",
        // minPopulation: "1000000",
        types: "CITY",
        namePrefix: inputValue,
        sort: "-population",
    },
});

export const loadOptions = async (inputValue) => {
    try {
        const response = await axios.request(geoApiOptions(inputValue));
        return {
            options: response.data.data.map((city) => {
                return {
                    label: `${city.name}, ${city.countryCode}`,
                    value: {
                        latitude: `${city.latitude}`,
                        longitude: `${city.longitude}`,
                    },
                };
            }),
        };
    } catch (error) {
        console.error(error);
    }
};
