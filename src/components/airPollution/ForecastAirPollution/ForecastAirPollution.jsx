import { memo, useRef } from "react";
import { getForecastDays } from "../../../utils/helpers";
import DailyAirPollutionItem from "../DailyAirPollutionItem/DailyAirPollutionItem";
import CustomAccordion from "../../ui/Accordion/Accordion";

function ForecastAirPollution({ forecastAirPollutionData }) {
    const forecastDays = getForecastDays();
    const listOfRefs = [];

    return (
        <CustomAccordion listOfRefs={listOfRefs}>
            {forecastAirPollutionData.map((dayData, index) => {
                const scrollableContainerRef = useRef(null);
                listOfRefs.push(scrollableContainerRef);
                return (
                    <DailyAirPollutionItem
                        key={index}
                        dayData={dayData}
                        index={index}
                        forecastDays={forecastDays}
                        scrollableContainerRef={scrollableContainerRef}
                    />
                );
            })}
        </CustomAccordion>
    );
}

export default memo(ForecastAirPollution);
