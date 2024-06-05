import { memo, useRef } from "react";
import DailyAirPollutionItem from "../DailyAirPollutionItem/DailyAirPollutionItem";
import CustomAccordion from "../../ui/Accordion/Accordion";

function ForecastAirPollution({ forecastAirPollutionData }) {
    const listOfRefs = [];

    return (
        <CustomAccordion listOfRefs={listOfRefs}>
            {forecastAirPollutionData?.map((dayData, index) => {
                const scrollableContainerRef = useRef(null);
                listOfRefs.push(scrollableContainerRef);
                return (
                    <DailyAirPollutionItem
                        key={index}
                        dayData={dayData}
                        scrollableContainerRef={scrollableContainerRef}
                    />
                );
            })}
        </CustomAccordion>
    );
}

export default memo(ForecastAirPollution);
