import { useState, useEffect } from "react";
import { fetchWeather } from "../services/api/fetchCurrentAndForecastWeather";
import { fetchAirPollution } from "../services/api/fetchAirPollution";
import { fetchReversedGecoding } from "../services/api/fetchReversedGeocoding";
import { fetchLongTermWeather } from "../services/api/fetchLongTermWeather";

export const useDataWithCitiesHandler = (city, dataType) => {
    const [data, setData] = useState({
        city: null,
        fetchedData: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            setData({ ...data, loading: true });
            let latitude, longitude, currentPosition;

            if (city.value.latitude && city.value.longitude) {
                latitude = city.value.latitude;
                longitude = city.value.longitude;
            } else {
                try {
                    currentPosition = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(
                            resolve,
                            reject
                        );
                    });

                    latitude = currentPosition.coords.latitude;
                    longitude = currentPosition.coords.longitude;
                } catch (error) {
                    setData({
                        ...data,
                        loading: false,
                        error: error.message,
                    });
                    return;
                }
            }

            try {
                const [fetchedData, cityName] = await Promise.all([
                    (() => {
                        switch (dataType) {
                            case "weather":
                                return fetchWeather(latitude, longitude);
                            case "airPollution":
                                return fetchAirPollution(latitude, longitude);
                            case "longTermWeather":
                                return fetchLongTermWeather(
                                    latitude,
                                    longitude
                                );
                            default:
                                throw new Error("Invalid data type");
                        }
                    })(),
                    currentPosition &&
                        fetchReversedGecoding(latitude, longitude),
                ]);

                setData({
                    city: cityName
                        ? `${
                              cityName.results[0]?.city
                          }, ${cityName.results[0]?.country_code?.toUpperCase()}`
                        : city.label,
                    fetchedData: fetchedData,
                    loading: false,
                    error: null,
                });
            } catch (error) {
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
