import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/fetchCurrentWeather";
import HomeComponent from "../components/home/HomeComponent";
import { useSelector } from "react-redux";

export default function HomeContainer() {
    const cityCoords = useSelector(({ cityCoords }) => cityCoords);

    const [data, setData] = useState({
        weatherInfo: null,
        loading: false,
        error: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            let latitude, longitude;

            if (cityCoords.latitude && cityCoords.longitude) {
                latitude = cityCoords.latitude;
                longitude = cityCoords.longitude;
            } else {
                try {
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(
                            resolve,
                            reject
                        );
                    });
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;
                } catch (error) {
                    console.error("Error getting location:", error);

                    setData({ ...data, error: error.message });
                    return;
                }
            }

            setData({ ...data, loading: true });
            const weatherData = await fetchWeatherData(
                latitude,
                longitude,
                data
            );
            setData(weatherData);
        };

        fetchData();
    }, [cityCoords]);

    return <HomeComponent data={data} />;
}
