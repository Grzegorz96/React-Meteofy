import React, { useEffect, useState } from "react";
import { fetchAirPollution } from "../api/fetchAirPollution";
import { fetchReversedGecoding } from "../api/fetchReversedGeocoding";
import LoaderComponent from "../components/loader/LoaderComponent";
import PopupComponent from "../components/popup/PopupComponent";
import SearchComponent from "../components/searchEngine/SearchComponent";
import CurrentAirPollution from "../components/airPollution/CurrentAirPollution";
import ForecastAirPollution from "../components/airPollution/ForecastAirPollution";
import { airPollutionInputStyle } from "../components/searchEngine/SearchComponent.styles";

export default function AirPollutionContainer() {
    const [selectedCity, setSelectedCity] = useState({
        label: null,
        value: { latitude: null, longitude: null },
    });

    const [data, setData] = useState({
        city: null,
        airPollutionData: null,
        loading: false,
        error: null,
    });

    const handleOnChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    useEffect(() => {
        const fetchData = async () => {
            setData({ ...data, loading: true });
            let latitude, longitude, currentPosition;

            if (selectedCity.value.latitude && selectedCity.value.longitude) {
                latitude = selectedCity.value.latitude;
                longitude = selectedCity.value.longitude;
            } else {
                try {
                    currentPosition = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(
                            resolve,
                            reject
                        );
                    });

                    latitude = currentPosition.coords.latitude;
                    longitude = currentPosition.coords.longitude;
                } catch (error) {
                    setData({
                        ...data,
                        loading: false,
                        error: error.message,
                    });
                    return;
                }
            }

            try {
                const [airPollutionData, cityName] = await Promise.all([
                    fetchAirPollution(latitude, longitude),
                    currentPosition &&
                        fetchReversedGecoding(latitude, longitude),
                ]);

                setData({
                    city: cityName
                        ? `${cityName[0]?.City}, ${cityName[0]?.CountryId}`
                        : selectedCity.label,
                    airPollutionData: airPollutionData,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                setData({
                    city: null,
                    weatherData: null,
                    loading: false,
                    error: error.message,
                });
            }
        };

        fetchData();
    }, [selectedCity]);

    return (
        <>
            {data.error && <PopupComponent data={data} setData={setData} />}
            {data.loading && <LoaderComponent />}
            <SearchComponent
                placeholder="Search for a city to check air pollution"
                city={selectedCity}
                handleOnChange={handleOnChange}
                style={airPollutionInputStyle}
            />
            {data.airPollutionData && (
                <CurrentAirPollution
                    currentAirPollutionData={data.airPollutionData.days[0]}
                    city={data.city}
                />
            )}
            {data.airPollutionData && (
                <ForecastAirPollution
                    forecastAirPollutionData={data.airPollutionData.days.slice(
                        0,
                        4
                    )}
                />
            )}
        </>
    );
}
