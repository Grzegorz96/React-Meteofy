import { memo, useRef } from "react";
import DailyWeatherItem from "../DailyWeatherItem/DailyWeatherItem";
import CustomAccordion from "../../ui/Accordion/Accordion";

function ForecastWeather({ forecastWeather }) {
    const listOfRefs = [];

    return (
        <CustomAccordion listOfRefs={listOfRefs}>
            {forecastWeather?.map((dayData, index) => {
                const scrollableContainerRef = useRef(null);
                listOfRefs.push(scrollableContainerRef);
                return (
                    <DailyWeatherItem
                        key={index}
                        dayData={dayData}
                        scrollableContainerRef={scrollableContainerRef}
                    />
                );
            })}
        </CustomAccordion>
    );
}

export default memo(ForecastWeather);
