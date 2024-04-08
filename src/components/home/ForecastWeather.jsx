import React, { useRef } from "react";
import { memo } from "react";
import { StyledAccordion, Title } from "../accordion/Accordion.styles";
import DailyItem from "./DailyItem";
import { getForecastDays } from "../../utils/calculateForecastDays";

function ForecastWeather({ forecastWeather }) {
    const forecastDays = getForecastDays();
    // const accordionRef = useRef(null);

    // const handleAccordionChange = (activeItems) => {};

    return (
        <StyledAccordion allowZeroExpanded>
            <Title>Daily</Title>
            {forecastWeather.map((dayData, index) => (
                <DailyItem
                    key={index}
                    index={index}
                    dayData={dayData}
                    forecastDays={forecastDays}
                />
            ))}
        </StyledAccordion>
    );
}

export default memo(ForecastWeather);
