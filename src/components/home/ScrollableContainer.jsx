import React, { useRef } from "react";
import {
    ScrollContainer,
    NavigateButton,
    ScrollWrapper,
} from "./ForecastWeather.styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HourItem, Label, WeatherIcon } from "./ForecastWeather.styles";

export default function ScrollableContainer({ dayData }) {
    const scrollableContainerRef = useRef(null);

    function handleBackButtonClick() {
        const scrollableContainer = scrollableContainerRef.current;
        scrollableContainer.style.scrollBehavior = "smooth";
        scrollableContainer.scrollLeft -= 400;
    }

    function handleNextButtonClick() {
        const scrollableContainer = scrollableContainerRef.current;
        scrollableContainer.style.scrollBehavior = "smooth";
        scrollableContainer.scrollLeft += 400;
    }

    function handleWheelScroll(evt) {
        const scrollableContainer = scrollableContainerRef.current;
        scrollableContainer.style.scrollBehavior = "auto";
        scrollableContainer.scrollLeft += evt.deltaY;
    }

    return (
        <ScrollWrapper>
            <NavigateButton onClick={handleBackButtonClick} $left="15px">
                <FaChevronLeft />
            </NavigateButton>
            <ScrollContainer
                ref={scrollableContainerRef}
                onWheel={handleWheelScroll}
            >
                {dayData.hours.map((hourData, index) => (
                    <HourItem key={index}>
                        <Label>{hourData.datetime.substring(0, 5)}</Label>
                        <Label
                            $fontSize="10px"
                            $fontWeight="600"
                            $height="13px"
                        >
                            {hourData.precipprob >= 0.5
                                ? `${Math.round(hourData.precipprob)}%`
                                : null}
                        </Label>
                        <WeatherIcon $icon={hourData.icon} />
                        <Label>{Math.round(hourData.temp)}°C</Label>
                    </HourItem>
                ))}
            </ScrollContainer>
            <NavigateButton onClick={handleNextButtonClick} $right="15px">
                <FaChevronRight />
            </NavigateButton>
        </ScrollWrapper>
    );
}
