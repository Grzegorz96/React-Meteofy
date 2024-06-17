import { useState, useEffect } from "react";
import { fetchWeather } from "../services/api/fetchCurrentAndForecastWeather";
import { fetchAirPollution } from "../services/api/fetchAirPollution";
import { fetchReversedGecoding } from "../services/api/fetchReversedGeocoding";
import { fetchLongTermWeather } from "../services/api/fetchLongTermWeather";
import { defaultCityCoords } from "../utils/helpers";

/**
 * Retrieves the coordinates (latitude and longitude) for a given city or the user's current location.
 * If a city is provided, it returns the coordinates of that city. Otherwise, it attempts to retrieve the user's current location.
 * If the user's location cannot be retrieved, it returns default city coordinates.
 *
 * @param {Object} city - The city object containing latitude and longitude values.
 * @returns {Object} The coordinates object containing latitude and longitude values.
 */
const getCoordinates = async (city) => {
    if (city) {
        return {
            latitude: city.value.latitude,
            longitude: city.value.longitude,
        };
    } else {
        try {
            const currentPosition = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            return {
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude,
            };
        } catch (error) {
            return defaultCityCoords;
        }
    }
};

/**
 * Fetches data based on the given latitude, longitude, and data type.
 *
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @param {string} dataType - The type of data to fetch.
 * @returns {Promise<any>} A promise that resolves to the fetched data.
 * @throws {Error} If an invalid data type is provided.
 */
const fetchDataByType = async (latitude, longitude, dataType) => {
    switch (dataType) {
        case "weather":
            return fetchWeather(latitude, longitude);
        case "airPollution":
            return fetchAirPollution(latitude, longitude);
        case "longTermWeather":
            return fetchLongTermWeather(latitude, longitude);
        default:
            throw new Error("Invalid data type");
    }
};

/**
 * Custom hook that handles fetching data for a given city and data type.
 *
 * @param {string} city - The city for which to fetch the data.
 * @param {string} dataType - The type of data to fetch.
 * @returns {object} An object containing the fetched data, loading state, error, city and a setter to update the data.
 */
const useDataWithCitiesHandler = (city, dataType) => {
    const [data, setData] = useState({
        city: null,
        fetchedData: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            // Set loading state to true when fetching data.
            setData({ ...data, loading: true });

            // Fetch data based on the provided city and data type.
            try {
                const { latitude, longitude } = await getCoordinates(city);
                const [fetchedData, cityName] = await Promise.all([
                    fetchDataByType(latitude, longitude, dataType),
                    !city && fetchReversedGecoding(latitude, longitude),
                ]);

                // Update the state with the fetched data.
                setData({
                    city: city
                        ? city.label
                        : `${
                              cityName?.results?.[0]?.city
                          }, ${cityName?.results?.[0]?.country_code.toUpperCase()}`,
                    fetchedData,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                // Handle errors when fetching data.
                setData({
                    city: null,
                    fetchedData: null,
                    loading: false,
                    error: error.message,
                });
            }
        };
        fetchData();
    }, [city]);

    return { data, setData };
};

export default useDataWithCitiesHandler;
