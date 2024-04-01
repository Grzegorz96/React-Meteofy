import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/fetchCurrentWeather";
import { fetchForecastWeather } from "../api/fetchForecastWeather";
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
        currentWeather: null,
        forecastWeather: null,
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
                } catch (error) {
                    console.error("Error getting location:", error);
                    setData({
                        ...data,
                        error: error.message,
                    });
                    return;
                }
            }

            setData({ ...data, loading: true });
            try {
                const [currentWeather, forecastWeather] = await Promise.all([
                    fetchCurrentWeather(latitude, longitude),
                    fetchForecastWeather(latitude, longitude),
                ]);

                setData({
                    city:
                        cityData.label ||
                        `${currentWeather.name}, ${currentWeather.sys.country}`,
                    currentWeather: currentWeather,
                    forecastWeather: forecastWeather,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                setData({
                    city: null,
                    currentWeather: null,
                    forecastWeather: null,
                    loading: false,
                    error: error.message,
                });
            }
        };

        fetchData();
    }, [cityData]);
    // console.log(data);
    return (
        <>
            {data.error && <PopupComponent data={data} setData={setData} />}
            {data.loading && <LoaderComponent />}
            {data.currentWeather && (
                <CurrentWeather
                    currentWeather={data.currentWeather}
                    city={data.city}
                />
            )}
            {data.forecastWeather && (
                <ForecastWeather forecastWeather={data.forecastWeather} />
            )}
        </>
    );
}
