import { memo } from "react";
import {
    CurrentWeatherWrapper,
    Wrapper,
    WeatherIcon,
    Text,
    TopWrapper,
    Details,
} from "./CurrentWeather.styles";
import { FaTemperatureHalf, FaWind, FaWeightScale } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { MdOutlineVisibility, MdDewPoint } from "react-icons/md";
import { IoRainy, IoCloud } from "react-icons/io5";

function CurrentWeather({ currentWeather, city }) {
    return (
        <CurrentWeatherWrapper>
            <Wrapper $gap="5px" $flexDirection="column" $width="65%">
                <Text $fontWeight="bold" $fontSize="10px" $top="5px">
                    {`Current weather at ${currentWeather.datetime.substring(
                        0,
                        5
                    )} local time`}
                </Text>
                <Text
                    $fontWeight="600"
                    $fontSize="26px"
                    $lineHeight="1"
                    $letterSpacing="1px"
                >
                    {city}
                </Text>
                <Text $fontWeight="400" $fontSize="12px" $lineHeight="1">
                    {currentWeather.conditions}
                </Text>
            </Wrapper>
            <TopWrapper>
                <Wrapper>
                    <Text
                        $fontWeight="600"
                        $fontSize="50px"
                        $letterSpacing="-1px"
                    >
                        {Math.round(currentWeather.temp)}°C
                    </Text>
                    <WeatherIcon $icon={currentWeather.icon} />
                </Wrapper>
                <Wrapper
                    $flexDirection="column"
                    $alignItems="flex-start"
                    $justifyContent="flex-start"
                    $gap="5px"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Sunrise & Sunset
                    </Text>
                    <Wrapper
                        $gap="0"
                        $justifyContent="space-between"
                        $width="100%"
                    >
                        <Wrapper $gap="5px">
                            <FiSunrise fontSize={25} />
                            <Text $fontWeight="300" $fontSize="18px">
                                {currentWeather.sunrise.substring(0, 5)}
                            </Text>
                        </Wrapper>
                        <Wrapper $gap="5px">
                            <FiSunset fontSize={25} />
                            <Text $fontWeight="300" $fontSize="18px">
                                {currentWeather.sunset.substring(0, 5)}
                            </Text>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </TopWrapper>
            <Details>
                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Feels like
                    </Text>
                    <Wrapper $gap="5px">
                        <FaTemperatureHalf fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.feelslike)}°C
                        </Text>
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Wind
                    </Text>
                    <Wrapper $gap="5px">
                        <FaWind fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.windspeed)} km/h
                        </Text>
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Precipitation
                    </Text>
                    <Wrapper $gap="5px">
                        <IoRainy fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.precipprob)}%
                        </Text>
                    </Wrapper>
                </Wrapper>

                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Humidity
                    </Text>
                    <Wrapper $gap="5px">
                        <WiHumidity fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.humidity)}%
                        </Text>
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Pressure
                    </Text>
                    <Wrapper $gap="5px">
                        <FaWeightScale fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.pressure)} hPa
                        </Text>
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Visibility
                    </Text>
                    <Wrapper $gap="5px">
                        <MdOutlineVisibility fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.visibility)} km
                        </Text>
                    </Wrapper>
                </Wrapper>

                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Dew point
                    </Text>
                    <Wrapper $gap="5px">
                        <MdDewPoint fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.dew)}°C
                        </Text>
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    $flexDirection="column"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                >
                    <Text $fontWeight="600" $fontSize="10px" color="grey">
                        Clouds
                    </Text>
                    <Wrapper $gap="5px">
                        <IoCloud fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.cloudcover)}%
                        </Text>
                    </Wrapper>
                </Wrapper>
            </Details>
        </CurrentWeatherWrapper>
    );
}

export default memo(CurrentWeather);
