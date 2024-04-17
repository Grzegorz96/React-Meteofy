import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import { useState, useMemo } from "react";
import LoaderComponent from "../components/ui/Loader/Loader";
import ModalComponent from "../components/ui/Modal/Modal";
import SearchEngine from "../components/ui/SearchEngine/SearchEngine";
import CurrentAirPollution from "../components/airPollution/CurrentAirPollution/CurrentAirPollution";
import ForecastAirPollution from "../components/airPollution/ForecastAirPollution/ForecastAirPollution";
import { airPollutionInputStyle } from "../components/ui/SearchEngine/SearchEngine.styles";

export default function AirPollutionContainer() {
    const [selectedCity, setSelectedCity] = useState({
        label: null,
        value: { latitude: null, longitude: null },
    });
    const { data, setData } = useDataWithCitiesHandler(
        selectedCity,
        "airPollution"
    );
    const handleOnChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    const forecastData = useMemo(
        () => data.fetchedData?.days.slice(0, 4),
        [data.fetchedData]
    );

    return (
        <>
            {data.error && <ModalComponent data={data} setData={setData} />}
            {data.loading && <LoaderComponent />}
            <SearchEngine
                placeholder="Search AQI by city name"
                city={selectedCity}
                handleOnChange={handleOnChange}
                style={airPollutionInputStyle}
            />
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
