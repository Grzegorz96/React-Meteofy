import { StyledAccordion, Title } from "../accordion/Accordion.styles";
import { getForecastDays } from "../../utils/calculateForecastDays";
import DailyItem from "./DailyItem";

export default function ForecastAirPollution({ forecastAirPollutionData }) {
    const forecastDays = getForecastDays();

    return (
        <StyledAccordion allowZeroExpanded>
            <Title>Daily</Title>
            {forecastAirPollutionData.map((dayData, index) => (
                <DailyItem
                    key={index}
                    dayData={dayData}
                    index={index}
                    forecastDays={forecastDays}
                />
            ))}
        </StyledAccordion>
    );
}
