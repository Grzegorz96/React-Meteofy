import axios from "axios";
import { API_DATA } from "../../utils/constants/api/geoDbApiData";

const geoApiOptions = (inputValue, page) => ({
    method: "GET",
    url: API_DATA.urls.cities,
    headers: {
        "X-RapidAPI-Key": API_DATA.apiKey,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
    params: {
        namePrefix: inputValue,
        types: "CITY",
        offset: `${10 * (page - 1)}`,
        limit: "10",
        sort: "-population",
    },
});

export const loadOptions = async (inputValue, _, { page }) => {
    try {
        const response = await axios.request(geoApiOptions(inputValue, page));
        return {
            options: response.data.data.map((city) => {
                return {
                    label: `${city.name}, ${city.countryCode}`,
                    value: {
                        latitude: city.latitude,
                        longitude: city.longitude,
                    },
                };
            }),
            hasMore: response.data.metadata.totalCount > 10,
            additional: {
                page: page + 1,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            options: [],
            hasMore: false,
        };
    }
};
