import React from "react";
import { ClipLoader } from "react-spinners";
import { CurrentWeatherLabel, Text } from "./HomeComponent.styles";

export default function HomeComponent({ data }) {
    // const sunriseTimestamp = 1711427024;
    // const sunsetTimestamp = 1711472337;

    // const sunriseDate = new Date(sunriseTimestamp * 1000);
    // const sunsetDate = new Date(sunsetTimestamp * 1000);

    // console.log("Sunrise:", sunriseDate.toLocaleString());
    // console.log("Sunset:", sunsetDate.toLocaleString());
    return (
        <>
            {/* <CurrentWeatherLabel>
                <Text $gridArea="city" style={{ fontSize: "24px" }}>
                    Warszawa
                </Text>
                <Text $gridArea="temp" style={{ fontSize: "18px" }}>
                    13 stopni
                </Text>
                <Text $gridArea="icon">Ikona pogody</Text>
                <Text $gridArea="description">Opis pogody</Text>
                <Text $gridArea="wind">Wind</Text>
                <Text $gridArea="humidity">Humidity</Text>
                <Text $gridArea="pressure">Pressure</Text>
                <Text $gridArea="visibility">Visibility</Text>
            </CurrentWeatherLabel> */}
            <CurrentWeatherLabel>
                <Text $gridArea="city" $fontSize="24px">
                    Warsaw
                </Text>
                <Text $gridArea="current" $fontSize="12px" $modifier1>
                    Current weather <br /> 12:00
                </Text>
                <Text $gridArea="description" $fontSize="20px" $modifier2>
                    few clouds
                </Text>
                <Text $gridArea="temp" $fontSize="40px">
                    23C
                </Text>
                <Text $gridArea="icon">XD</Text>
                <Text $gridArea="feels" $fontSize="10px" $modifier2>
                    feels like 22C
                </Text>
                <Text $gridArea="sunrise">05:45</Text>
                <Text $gridArea="sunset">20:34</Text>
                <Text $gridArea="mintemp">min temp 20C</Text>
                <Text $gridArea="maxtemp">max temp 25C</Text>
                <Text $gridArea="wind">wiatr</Text>
                <Text $gridArea="humidity">wilgotnosc</Text>
                <Text $gridArea="pressure">cisnienie</Text>
                <Text $gridArea="visibility">widocznosc</Text>
                <Text $gridArea="gap"></Text>
            </CurrentWeatherLabel>
        </>
    );
}
