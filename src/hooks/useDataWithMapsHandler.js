import { useState, useEffect } from "react";
import { fetchCitiesWeather } from "../services/api/fetchCitiesWeather";

/**
 * Custom hook that fetches weather data for multiple cities and handles the data using maps.
 *
 * @param {Array} cityObjects - An array of city objects.
 * @returns {Object} An object containing the fetched data, loading state, and error state and setter to update the data.
 */
export const useDataWithMapsHandler = (cityObjects) => {
    const [data, setData] = useState({
        fetchedData: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            // Set loading state to true when fetching data.
            setData({ ...data, loading: true });
            try {
                // Split the cityObjects array into chunks of size 20.
                const chunkSize = 20;
                const chunks = Math.ceil(cityObjects.length / chunkSize);

                // Create an array of promises, where each promise fetches weather data for a chunk of cities.
                const promises = Array.from({ length: chunks }, (_, index) => {
                    const start = index * chunkSize;
                    const end = start + chunkSize;
                    return fetchCitiesWeather(cityObjects.slice(start, end));
                });

                // Wait for all promises to resolve and combine the fetched data.
                const results = await Promise.all(promises);

                const fetchedData = results.reduce(
                    (accumulator, current) => ({
                        cnt: accumulator.cnt + current?.cnt,
                        list: accumulator.list.concat(current?.list),
                    }),
                    { cnt: 0, list: [] }
                );

                // Update the state with the fetched data.
                setData({ fetchedData, loading: false, error: null });
            } catch (error) {
                // Handle errors when fetching data.
                setData({
                    fetchedData: null,
                    loading: false,
                    error: error.message,
                });
            }
        };
        fetchData();
    }, []);
    return { data, setData };
};
