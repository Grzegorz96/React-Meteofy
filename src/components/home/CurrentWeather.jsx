import { memo } from "react";
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
import { FaTemperatureHalf, FaWind, FaWeightScale } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { MdOutlineVisibility, MdDewPoint } from "react-icons/md";
import { IoRainy } from "react-icons/io5";

function CurrentWeather({ currentWeather, city }) {
    return (
        <CurrentWeatherWrapper>
            <Text
                $fontWeight="bold"
                $fontSize="10px"
                $position="absolute"
                $top="5px"
            >
                {`Current weather at ${currentWeather.datetime.substring(
                    0,
                    5
                )}`}
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
                        {currentWeather.conditions}
                    </Text>
                </Wrapper>
                <WeatherIcon $icon={currentWeather.icon} />
            </Top>
            <Bottom>
                <Wrapper>
                    <Text
                        $fontWeight="600"
                        $fontSize="70px"
                        $letterSpacing="-3px"
                    >
                        {Math.round(currentWeather.temp)}°C
                    </Text>
                    <Wrapper $display="flex" $gap="5px">
                        <Wrapper $display="flex" $gap="4px">
                            <FiSunrise />
                            <Text $fontWeight="300" $fontSize="12px">
                                {currentWeather.sunrise.substring(0, 5)}
                            </Text>
                        </Wrapper>
                        /
                        <Wrapper $display="flex" $gap="4px">
                            <FiSunset />
                            <Text $fontWeight="300" $fontSize="12px">
                                {currentWeather.sunset.substring(0, 5)}
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
                        <Wrapper $display="flex" $gap="4px">
                            <ParameterValue>
                                {Math.round(currentWeather.feelslike)}°C
                            </ParameterValue>
                            <FaTemperatureHalf />
                        </Wrapper>
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Wind</ParameterLabel>
                        <Wrapper $display="flex" $gap="4px">
                            <ParameterValue>
                                {Math.round(currentWeather.windspeed)}km/h
                            </ParameterValue>
                            <FaWind />
                        </Wrapper>
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Precipitation</ParameterLabel>
                        <Wrapper $display="flex" $gap="4px">
                            <ParameterValue>
                                {Math.round(currentWeather.precipprob)}%
                            </ParameterValue>
                            <IoRainy />
                        </Wrapper>
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Humidity</ParameterLabel>
                        <Wrapper $display="flex" $gap="4px">
                            <ParameterValue>
                                {Math.round(currentWeather.humidity)}%
                            </ParameterValue>
                            <WiHumidity />
                        </Wrapper>
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Pressure</ParameterLabel>
                        <Wrapper $display="flex" $gap="4px">
                            <ParameterValue>
                                {Math.round(currentWeather.pressure)}hPa
                            </ParameterValue>
                            <FaWeightScale />
                        </Wrapper>
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Visibility</ParameterLabel>
                        <Wrapper $display="flex" $gap="4px">
                            <ParameterValue>
                                {Math.round(currentWeather.visibility)}km
                            </ParameterValue>
                            <MdOutlineVisibility />
                        </Wrapper>
                    </ParameterRow>
                    <ParameterRow>
                        <ParameterLabel>Dew point</ParameterLabel>
                        <Wrapper $display="flex" $gap="4px">
                            <ParameterValue>
                                {Math.round(currentWeather.dew)}°C
                            </ParameterValue>
                            <MdDewPoint />
                        </Wrapper>
                    </ParameterRow>
                </Details>
            </Bottom>
        </CurrentWeatherWrapper>
    );
}

export default memo(CurrentWeather);
