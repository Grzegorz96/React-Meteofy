import { useState, useEffect } from "react";
import { fetchCitiesWeather } from "../services/api/fetchCitiesWeather";

export const useDataWithMapsHandler = (cityObjects) => {
    const [data, setData] = useState({
        fetchedData: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            setData({ ...data, loading: true });
            try {
                const chunkSize = 20;
                const chunks = Math.ceil(cityObjects.length / chunkSize);

                const promises = Array.from({ length: chunks }, (_, index) => {
                    const start = index * chunkSize;
                    const end = start + chunkSize;
                    return fetchCitiesWeather(cityObjects.slice(start, end));
                });

                const results = await Promise.all(promises);

                const fetchedData = results.reduce(
                    (accumulator, current) => ({
                        cnt: accumulator.cnt + current?.cnt,
                        list: accumulator.list.concat(current?.list),
                    }),
                    { cnt: 0, list: [] }
                );

                setData({ fetchedData, loading: false, error: null });
            } catch (error) {
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
