import { useState, useMemo } from "react";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";
import SearchEngine from "../components/ui/SearchEngine/SearchEngine";
import { localInputStyles } from "../components/ui/SearchEngine/SearchEngine.styles";
import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import LongTermWeatherMain from "../components/longTermWeather/LongTermWeatherMain/LongTermWeatherMain";

export default function LongTermWeatherContainer() {
    const [selectedCity, setSelectedCity] = useState({
        label: null,
        value: { latitude: null, longitude: null },
    });

    const { data, setData } = useDataWithCitiesHandler(
        selectedCity,
        "longTermWeather"
    );
    const seasonalData = useMemo(() => {
        const { daily } = data.fetchedData || {};
        if (!daily) return;

        return Object.fromEntries(
            Object.entries(daily).filter(
                ([key]) => key.includes("member01") || key === "time"
            )
        );
    }, [data.fetchedData]);

    return (
        <>
            <SearchEngine
                placeholder="Search long term weather by city name"
                city={selectedCity}
                handleOnChange={(selectedOption) => {
                    setSelectedCity(selectedOption);
                }}
                styles={localInputStyles}
            />
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData && (
                <LongTermWeatherMain
                    seasonalData={seasonalData}
                    city={data.city}
                />
            )}
        </>
    );
}
