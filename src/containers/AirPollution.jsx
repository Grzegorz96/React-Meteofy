import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import { useState, useMemo } from "react";
import Loader from "../components/ui/Loader/Loader";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import SearchEngine from "../components/ui/SearchEngine/SearchEngine";
import CurrentAirPollution from "../components/airPollution/CurrentAirPollution/CurrentAirPollution";
import ForecastAirPollution from "../components/airPollution/ForecastAirPollution/ForecastAirPollution";
import { localInputStyles } from "../components/ui/SearchEngine/SearchEngine.styles";

/**
 * Functional component responsible for rendering the air pollution data.
 *
 * This component utilizes the `useDataWithCitiesHandler` hook to fetch and manage air pollution data for the selected city.
 * It renders the search engine component for selecting a city, and displays a loader while data is being fetched.
 * Once the data is fetched, it renders the `CurrentAirPollution` component to visualize the current air pollution conditions,
 * and the `ForecastAirPollution` component to visualize the forecasted air pollution conditions.
 *
 * @returns {JSX.Element} The rendered components based on the state of the data and search engine.
 */
export default function AirPollutionContainer() {
    // State to store the selected city.
    const [selectedCity, setSelectedCity] = useState(null);

    // Fetching data based on the selected city.
    const { data, setData } = useDataWithCitiesHandler(
        selectedCity,
        "airPollution"
    );

    // Extracting the first four days of forecast data.
    const forecastData = useMemo(
        () => data.fetchedData?.days.slice(0, 4),
        [data.fetchedData?.days]
    );

    return (
        <>
            <SearchEngine
                placeholder="Search AQI by city name"
                city={selectedCity}
                handleOnChange={(selectedOption) => {
                    setSelectedCity(selectedOption);
                }}
                styles={localInputStyles}
            />
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData?.days && data.city && (
                <CurrentAirPollution
                    currentAirPollutionData={data.fetchedData.days[0]}
                    city={data.city}
                />
            )}
            {data.fetchedData?.days && (
                <ForecastAirPollution forecastAirPollutionData={forecastData} />
            )}
        </>
    );
}
