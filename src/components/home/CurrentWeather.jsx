import React from "react";
import {
    CurrentWeatherWrapper,
    Top,
    WeatherIcon,
    Text,
    Bottom,
    Details,
    ParameterRow,
    ParameterLabel,
    ParameterValue,
    Wrapper,
} from "./CurrentWeather.styles";
import {
    FaTemperatureArrowDown,
    FaTemperatureArrowUp,
    FaTemperatureHalf,
    FaWind,
    FaWeightScale,
} from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { timestampToDate } from "../../utils/styles/timestampConventer";

export default function CurrentWeather({ currentWeather, city }) {
    return (
        <CurrentWeatherWrapper>
            <Text
                $fontWeight="bold"
                $fontSize="10px"
                $position="absolute"
                $top="5px"
            >
                {`Current weather at ${timestampToDate(currentWeather.dt)}`}
            </Text>
            <Top>
                <Wrapper>
                    <Text
                        $fontWeight="600"
                        $fontSize="18px"
                        $lineHeight="1"
                        $letterSpacing="1px"
                    >
                        {city}
                    </Text>
                    <Text $fontWeight="400" $fontSize="14px" $lineHeight="1">
                        {currentWeather.weather[0].description}
                    </Text>
                </Wrapper>
                <WeatherIcon $icon={currentWeather.weather[0].icon} />
            </Top>
            <Bottom>
                <Wrapper>
                    <Text
                        $fontWeight="600"
                        $fontSize="70px"
                        $letterSpacing="-5px"
                    >
                        {Math.round(currentWeather.main.temp)}°C
                    </Text>
                    <Wrapper $display="flex" $gap="5px">
                        <Wrapper $display="flex" $gap="3px">
                            <FaTemperatureArrowDown />
                            <Text $fontWeight="300" $fontSize="12px">
                                {Math.round(currentWeather.main.temp_min)}°C
                            </Text>
                        </Wrapper>
                        /
                        <Wrapper $display="flex" $gap="3px">
                            <FaTemperatureArrowUp />
                            <Text $fontWeight="300" $fontSize="12px">
                                {Math.round(currentWeather.main.temp_max)}°C
                            </Text>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Details>
                    <ParameterRow>
                        <ParameterLabel $borderBottom>Details</ParameterLabel>
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Feels like</ParameterLabel>
                        <ParameterValue>
                            {Math.round(currentWeather.main.feels_like)}°C
                        </ParameterValue>
                        <FaTemperatureHalf />
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Wind</ParameterLabel>
                        <ParameterValue>
                            {currentWeather.wind.speed}m/s
                        </ParameterValue>
                        <FaWind />
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Humidity</ParameterLabel>
                        <ParameterValue>
                            {currentWeather.main.humidity}%
                        </ParameterValue>
                        <WiHumidity />
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Pressure</ParameterLabel>
                        <ParameterValue>
                            {currentWeather.main.pressure}hPa
                        </ParameterValue>
                        <FaWeightScale />
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Sunrise</ParameterLabel>
                        <ParameterValue>
                            {timestampToDate(currentWeather.sys.sunrise)}
                        </ParameterValue>
                        <FiSunrise />
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Sunset</ParameterLabel>
                        <ParameterValue>
                            {timestampToDate(currentWeather.sys.sunset)}
                        </ParameterValue>
                        <FiSunset />
                    </ParameterRow>
                </Details>
            </Bottom>
        </CurrentWeatherWrapper>
    );
}
