import { memo } from "react";
import {
    CurrentWeatherWrapper,
    MainWrapper,
    SecondWrapper,
    DetailsWrapper,
    Detail,
    DetailValue,
    WeatherIcon,
    Text,
    TempInfo,
    SunInfo,
    SunItems,
    SunValue,
} from "./CurrentWeather.styles";
import { FaTemperatureHalf, FaWind, FaWeightScale } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { MdOutlineVisibility, MdDewPoint } from "react-icons/md";
import { IoRainy, IoCloud } from "react-icons/io5";

function CurrentWeather({ currentWeather, city }) {
    return (
        <CurrentWeatherWrapper>
            <MainWrapper $gap="5px" $flexDirection="column" $width="65%">
                <Text $fontWeight="600" $fontSize="10px" $grey>
                    {`Weather conditions at ${currentWeather.datetime.substring(
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
                <Text $fontWeight="300" $fontSize="12px" $lineHeight="1">
                    {currentWeather.conditions}
                </Text>
            </MainWrapper>
            <SecondWrapper>
                <TempInfo>
                    <Text
                        $fontWeight="600"
                        $fontSize="45px"
                        $letterSpacing="-1px"
                    >
                        {Math.round(currentWeather.temp)}°C
                    </Text>
                    <WeatherIcon $icon={currentWeather.icon} />
                </TempInfo>
                <SunInfo>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Sunrise & Sunset
                    </Text>
                    <SunItems>
                        <SunValue>
                            <FiSunrise fontSize={25} />
                            <Text $fontWeight="300" $fontSize="18px">
                                {currentWeather.sunrise.substring(0, 5)}
                            </Text>
                        </SunValue>
                        <SunValue>
                            <FiSunset fontSize={25} />
                            <Text $fontWeight="300" $fontSize="18px">
                                {currentWeather.sunset.substring(0, 5)}
                            </Text>
                        </SunValue>
                    </SunItems>
                </SunInfo>
            </SecondWrapper>
            <DetailsWrapper>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Feels like
                    </Text>
                    <DetailValue>
                        <FaTemperatureHalf fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.feelslike)}°C
                        </Text>
                    </DetailValue>
                </Detail>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Wind
                    </Text>
                    <DetailValue>
                        <FaWind fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.windspeed)} km/h
                        </Text>
                    </DetailValue>
                </Detail>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Precipitation
                    </Text>
                    <DetailValue>
                        <IoRainy fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.precipprob)}%
                        </Text>
                    </DetailValue>
                </Detail>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Humidity
                    </Text>
                    <DetailValue>
                        <WiHumidity fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.humidity)}%
                        </Text>
                    </DetailValue>
                </Detail>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Pressure
                    </Text>
                    <DetailValue>
                        <FaWeightScale fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.pressure)} hPa
                        </Text>
                    </DetailValue>
                </Detail>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Visibility
                    </Text>
                    <DetailValue>
                        <MdOutlineVisibility fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.visibility)} km
                        </Text>
                    </DetailValue>
                </Detail>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Dew point
                    </Text>
                    <DetailValue>
                        <MdDewPoint fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.dew)}°C
                        </Text>
                    </DetailValue>
                </Detail>
                <Detail>
                    <Text $fontWeight="600" $fontSize="10px" $grey>
                        Clouds
                    </Text>
                    <DetailValue>
                        <IoCloud fontSize={20} />
                        <Text $fontWeight="300" $fontSize="14px">
                            {Math.round(currentWeather.cloudcover)}%
                        </Text>
                    </DetailValue>
                </Detail>
            </DetailsWrapper>
        </CurrentWeatherWrapper>
    );
}

export default memo(CurrentWeather);
