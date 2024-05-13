import { memo, useRef } from "react";
import DailyWeatherItem from "../DailyWeatherItem/DailyWeatherItem";
import { getForecastDays } from "../../../utils/helpers";
import CustomAccordion from "../../ui/Accordion/Accordion";

function ForecastWeather({ forecastWeather }) {
    const forecastDays = getForecastDays();
    const listOfRefs = [];

    return (
        <CustomAccordion listOfRefs={listOfRefs}>
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
        </CustomAccordion>
    );
}

export default memo(ForecastWeather);
