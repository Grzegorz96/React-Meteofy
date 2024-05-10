import axios from "axios";
import { API_DATA } from "../../utils/constants/api/geoDbApiData";
import { requestCityDelay } from "../../utils/helpers";

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

export const loadOptions = async (inputValue, loadOptions, { page }) => {
    const currentTime = Date.now();
    if (
        currentTime - requestCityDelay.lastRequestTime >
        requestCityDelay.minRequestInterval
    ) {
        try {
            requestCityDelay.lastRequestTime = currentTime;
            const response = await axios.request(
                geoApiOptions(inputValue, page)
            );

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
                hasMore:
                    response.data.metadata.totalCount -
                        (response.data.metadata.currentOffset + 10) >
                    0,
                additional: {
                    page: page + 1,
                },
            };
        } catch (error) {
            console.error(error);
            return {
                options: [],
                hasMore: false,
                additional: {
                    page: page,
                },
            };
        }
    } else {
        return {
            options: [],
            hasMore: true,
            additional: {
                page: page,
            },
        };
    }
};
