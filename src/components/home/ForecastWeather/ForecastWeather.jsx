import { memo } from "react";
import { StyledAccordion, Title } from "../../ui/Accordion/Accordion.styles";
import DailyWeatherItem from "../DailyWeatherItem/DailyWeatherItem";
import { getForecastDays } from "../../../utils/helpers";

function ForecastWeather({ forecastWeather }) {
    const forecastDays = getForecastDays();

    return (
        <StyledAccordion allowZeroExpanded>
            <Title>Daily</Title>
            {forecastWeather.map((dayData, index) => (
                <DailyWeatherItem
                    key={index}
                    index={index}
                    dayData={dayData}
                    forecastDays={forecastDays}
                />
            ))}
        </StyledAccordion>
    );
}

export default memo(ForecastWeather);
