import { useEffect, useState } from "react";
import { fetchWeather } from "../api/fetchCurrentAndForecastWeather";
import { fetchReversedGecoding } from "../api/fetchReversedGeocoding";
import { useSelector, useDispatch } from "react-redux";
import { resetCityData } from "../state/cityDataSlice";
import CurrentWeather from "../components/home/CurrentWeather";
import ForecastWeather from "../components/home/ForecastWeather";
import LoaderComponent from "../components/Loader/LoaderComponent";
import PopupComponent from "../components/Popup/PopupComponent";

export default function HomeContainer() {
    const cityData = useSelector(({ cityData }) => cityData);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        city: null,
        weatherData: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        return () => {
            dispatch(resetCityData());
        };
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            let latitude, longitude;

            setData({ ...data, loading: true });
            if (cityData.value.latitude && cityData.value.longitude) {
                latitude = cityData.value.latitude;
                longitude = cityData.value.longitude;
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

                    var cityName = await fetchReversedGecoding(
                        latitude,
                        longitude
                    );
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
                const weatherData = await fetchWeather(latitude, longitude);
                setData({
                    city:
                        cityData.label ||
                        `${cityName[0]?.City}, ${cityName[0]?.CountryId}`,
                    weatherData: weatherData,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                setData({
                    city: null,
                    weatherData: null,
                    loading: false,
                    error: error.message,
                });
            }
        };

        fetchData();
    }, [cityData]);

    console.log(data);
    return (
        <>
            {data.error && <PopupComponent data={data} setData={setData} />}
            {data.loading && <LoaderComponent />}
            {data.weatherData && (
                <CurrentWeather
                    currentWeather={data.weatherData.currentConditions}
                    city={data.city}
                />
            )}
            {data.weatherData && (
                <ForecastWeather forecastWeather={data.weatherData.days} />
            )}
        </>
    );
}
