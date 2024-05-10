import { memo, useRef } from "react";
import { StyledAccordion, Title } from "../../ui/Accordion/Accordion.styles";
import { getForecastDays } from "../../../utils/helpers";
import DailyAirPollutionItem from "../DailyAirPollutionItem/DailyAirPollutionItem";

function ForecastAirPollution({ forecastAirPollutionData }) {
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
        </StyledAccordion>
    );
}

export default memo(ForecastAirPollution);
