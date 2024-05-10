import { memo, useRef } from "react";
import { StyledAccordion, Title } from "../../ui/Accordion/Accordion.styles";
import DailyWeatherItem from "../DailyWeatherItem/DailyWeatherItem";
import { getForecastDays } from "../../../utils/helpers";

function ForecastWeather({ forecastWeather }) {
    const forecastDays = getForecastDays();
    const listOfRefs = [];

    return (
        <StyledAccordion
            allowZeroExpanded
            onChange={(value) => {
                if (value.length) {
                    listOfRefs.forEach((ref) => {
                        if (ref.current) {
                            ref.current.style.scrollBehavior = "auto";
                            ref.current.scrollLeft = 0;
                        }
                    });
                }
            }}
        >
            <Title>Daily</Title>
            {forecastWeather.map((dayData, index) => {
                const scrollableContainerRef = useRef(null);
                listOfRefs.push(scrollableContainerRef);
                return (
                    <DailyWeatherItem
                        key={index}
                        index={index}
                        dayData={dayData}
                        forecastDays={forecastDays}
                        scrollableContainerRef={scrollableContainerRef}
                    />
                );
            })}
        </StyledAccordion>
    );
}

export default memo(ForecastWeather);
