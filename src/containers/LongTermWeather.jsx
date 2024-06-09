import { useState, useMemo } from "react";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";
import SearchEngine from "../components/ui/SearchEngine/SearchEngine";
import { localInputStyles } from "../components/ui/SearchEngine/SearchEngine.styles";
import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";
import LongTermWeatherMain from "../components/longTermWeather/LongTermWeatherMain/LongTermWeatherMain";

/**
 * @component
 * Functional component that handles the display and management of long-term weather data.
 *
 * This component utilizes the `useDataWithCitiesHandler` hook to fetch and manage data related to long-term weather.
 * It includes a search engine component for selecting a city, and displays a loader while data is being fetched.
 * Once the data is fetched, it renders the `LongTermWeatherMain` component to visualize the long-term weather forecast.
 *
 * @returns {JSX.Element} The rendered components based on the state of the data and search engine.
 */
export default function LongTermWeatherContainer() {
    // State to store the selected city.
    const [selectedCity, setSelectedCity] = useState(null);

    // Fetching data based on the selected city.
    const { data, setData } = useDataWithCitiesHandler(
        selectedCity,
        "longTermWeather"
    );

    // Extracting only the time and member01 data from the fetched data.
    const seasonalData = useMemo(() => {
        const { daily } = data.fetchedData || {};
        if (!daily) return;

        return Object.fromEntries(
            Object.entries(daily).filter(
                ([key]) => key.includes("member01") || key === "time"
            )
        );
    }, [data.fetchedData?.daily]);

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
            {data.fetchedData?.daily && data.city && (
                <LongTermWeatherMain
                    seasonalData={seasonalData}
                    city={data.city}
                />
            )}
        </>
    );
}
