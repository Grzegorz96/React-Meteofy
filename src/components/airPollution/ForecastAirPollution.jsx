import { StyledAccordion, Title } from "../ui/Accordion/Accordion.styles";
import { getForecastDays } from "../../utils/helpers";
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
