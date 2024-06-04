import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import { useState, useMemo } from "react";
import Loader from "../components/ui/Loader/Loader";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import SearchEngine from "../components/ui/SearchEngine/SearchEngine";
import CurrentAirPollution from "../components/airPollution/CurrentAirPollution/CurrentAirPollution";
import ForecastAirPollution from "../components/airPollution/ForecastAirPollution/ForecastAirPollution";
import { localInputStyles } from "../components/ui/SearchEngine/SearchEngine.styles";

export default function AirPollutionContainer() {
    const [selectedCity, setSelectedCity] = useState(null);

    const { data, setData } = useDataWithCitiesHandler(
        selectedCity,
        "airPollution"
    );

    const forecastData = useMemo(
        () => data.fetchedData?.days.slice(0, 4),
        [data.fetchedData]
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
            {data.fetchedData && (
                <CurrentAirPollution
                    currentAirPollutionData={data.fetchedData.days[0]}
                    city={data.city}
                />
            )}
            {data.fetchedData && (
                <ForecastAirPollution forecastAirPollutionData={forecastData} />
            )}
        </>
    );
}
