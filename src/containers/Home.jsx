import { useEffect, useState } from "react";
import { fetchWeather } from "../services/api/fetchCurrentAndForecastWeather";
import { fetchReversedGecoding } from "../services/api/fetchReversedGeocoding";
import { useSelector, useDispatch } from "react-redux";
import { resetCityData } from "../state/cityDataSlice";
import CurrentWeather from "../components/home/CurrentWeather";
import ForecastWeather from "../components/home/ForecastWeather";
import LoaderComponent from "../components/ui/Loader/Loader";
import PopupComponent from "../components/ui/Popup/Popup";

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
            setData({ ...data, loading: true });
            let latitude, longitude, currentPosition;

            if (cityData.value.latitude && cityData.value.longitude) {
                latitude = cityData.value.latitude;
                longitude = cityData.value.longitude;
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
                const [weatherData, cityName] = await Promise.all([
                    fetchWeather(latitude, longitude),
                    currentPosition &&
                        fetchReversedGecoding(latitude, longitude),
                ]);

                setData({
                    city: cityName
                        ? `${cityName[0]?.City}, ${cityName[0]?.CountryId}`
                        : cityData.label,
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
