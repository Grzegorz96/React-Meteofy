import { memo } from "react";
import { StyledAccordion, Title } from "../../ui/Accordion/Accordion.styles";
import { getForecastDays } from "../../../utils/helpers";

import DailyAirPollutionItem from "../DailyAirPollutionItem/DailyAirPollutionItem";

function ForecastAirPollution({ forecastAirPollutionData }) {
    const forecastDays = getForecastDays();

    return (
        <StyledAccordion allowZeroExpanded>
            <Title>Daily</Title>
            {forecastAirPollutionData.map((dayData, index) => (
                <DailyAirPollutionItem
                    key={index}
                    dayData={dayData}
                    index={index}
                    forecastDays={forecastDays}
                />
            ))}
        </StyledAccordion>
    );
}

export default memo(ForecastAirPollution);
