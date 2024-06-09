import { memo, useRef } from "react";
import DailyAirPollutionItem from "../DailyAirPollutionItem/DailyAirPollutionItem";
import CustomAccordion from "../../ui/Accordion/Accordion";

/**
 * @component
 * Component for rendering forecast air pollution data. This component iterates over forecast air pollution data for each day and renders a `DailyAirPollutionItem` for each day.
 *
 * @param {Object} props - Component props.
 * @param {Object[]} props.forecastAirPollutionData - Array of objects containing forecast air pollution data for each day.
 * @returns {JSX.Element} The JSX element representing the forecast air pollution data.
 */
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
