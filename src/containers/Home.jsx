import useDataWithCitiesHandler from "../hooks/useDataWithCitiesHandler";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCityData } from "../state/cityDataSlice";
import CurrentWeather from "../components/home/CurrentWeather/CurrentWeather";
import ForecastWeather from "../components/home/ForecastWeather/ForecastWeather";
import Loader from "../components/ui/Loader/Loader";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";

/**
 * @component
 * Functional component responsible for rendering the home page content.
 *
 * This component utilizes the `useDataWithCitiesHandler` hook to fetch and manage weather data for the selected city.
 * It also uses Redux to manage city data and dispatches a reset action when unmounting.
 *
 * @returns {JSX.Element} The rendered components based on the state of the data.
 */
export default function HomeContainer() {
    // Fetching city data from Redux store.
    const cityData = useSelector(({ cityData }) => cityData);
    const dispatch = useDispatch();
    // Fetching weather data based on the selected city.
    const { data, setData } = useDataWithCitiesHandler(cityData, "weather");

    // Resetting Redux city data when unmounting the component.
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
