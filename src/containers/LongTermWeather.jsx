import { useState } from "react";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";
import SearchEngine from "../components/ui/SearchEngine/SearchEngine";
import { localInputStyle } from "../components/ui/SearchEngine/SearchEngine.styles";
import { useDataWithCitiesHandler } from "../hooks/useDataWithCitiesHandler";

export default function LongTermWeatherContainer() {
    const [selectedCity, setSelectedCity] = useState({
        label: null,
        value: { latitude: null, longitude: null },
    });

    const { data, setData } = useDataWithCitiesHandler(
        selectedCity,
        "longTermWeather"
    );

    console.log(data);
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
            {/* {data.fetchedData && (
                <PolandMap fetchedCitiesData={data.fetchedData} />
            )} */}
        </>
    );
}
