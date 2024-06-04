import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCityData } from "../state/cityDataSlice";
import CurrentWeather from "../components/home/CurrentWeather/CurrentWeather";
import ForecastWeather from "../components/home/ForecastWeather/ForecastWeather";
import Loader from "../components/ui/Loader/Loader";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";

export default function HomeContainer() {
    const cityData = useSelector(({ cityData }) => cityData);
    const dispatch = useDispatch();
    const { data, setData } = useDataWithCitiesHandler(cityData, "weather");

    useEffect(() => {
        return () => {
            dispatch(resetCityData());
        };
    }, [dispatch]);

    return (
        <>
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData?.currentConditions && data.city && (
                <CurrentWeather
                    currentWeather={data.fetchedData.currentConditions}
                    city={data.city}
                />
            )}
            {data.fetchedData?.days && (
                <ForecastWeather forecastWeather={data.fetchedData.days} />
            )}
        </>
    );
}
