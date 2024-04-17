import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCityData } from "../state/cityDataSlice";
import CurrentWeather from "../components/home/CurrentWeather/CurrentWeather";
import ForecastWeather from "../components/home/ForecastWeather/ForecastWeather";
import LoaderComponent from "../components/ui/Loader/Loader";
import ModalComponent from "../components/ui/Modal/Modal";

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
            {data.error && <ModalComponent data={data} setData={setData} />}
            {data.loading && <LoaderComponent />}
            {data.fetchedData && (
                <CurrentWeather
                    currentWeather={data.fetchedData.currentConditions}
                    city={data.city}
                />
            )}
            {data.fetchedData && (
                <ForecastWeather forecastWeather={data.fetchedData.days} />
            )}
        </>
    );
}
