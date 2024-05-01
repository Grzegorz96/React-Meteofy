import { useState, useMemo } from "react";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";
import SearchEngine from "../components/ui/SearchEngine/SearchEngine";
import { localInputStyle } from "../components/ui/SearchEngine/SearchEngine.styles";
import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import LongTermWeatherLinearChart from "../components/longTermWeather/LinearChart/LinearChart";

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
                placeholder="Search city"
                city={selectedCity}
                handleOnChange={(selectedOption) => {
                    setSelectedCity(selectedOption);
                }}
                style={localInputStyle}
            />
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData && (
                <LongTermWeatherLinearChart seasonalData={seasonalData} />
            )}
        </>
    );
}
