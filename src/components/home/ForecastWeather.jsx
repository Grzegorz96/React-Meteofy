import { memo } from "react";
import {
    StyledAccordion,
    StyledAccordionItemButton,
    Title,
    WeatherIcon,
    Day,
    Description,
    DailyDetailsGrid,
    DailyDetailsGridItem,
    Label,
} from "./ForecastWeather.styles";
import {
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
} from "react-accessible-accordion";

import { getForecastDays } from "../../utils/calculateForecastDays";

function ForecastWeather({ forecastWeather }) {
    const forecastDays = getForecastDays();
    console.log(forecastWeather);

    return (
        <StyledAccordion allowZeroExpanded>
            <Title>Daily</Title>
            {forecastWeather.list.slice(0, 7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <StyledAccordionItemButton>
                            <WeatherIcon $icon={item.weather[0].icon} />
                            <Day>{forecastDays[index]}</Day>
                            <Description>
                                {item.weather[0].description}
                            </Description>
                            <Label $grey>
                                {Math.round(item.main.temp_min)}°C /
                                {Math.round(item.main.temp_max)}°C
                            </Label>
                        </StyledAccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <DailyDetailsGrid>
                            <DailyDetailsGridItem>
                                <Label $grey>Pressure:</Label>
                                <Label>{item.main.pressure}hPa</Label>
                            </DailyDetailsGridItem>
                            <DailyDetailsGridItem>
                                <Label $grey>Humidity:</Label>
                                <Label>{item.main.humidity}%</Label>
                            </DailyDetailsGridItem>
                            <DailyDetailsGridItem>
                                <Label $grey>Clouds:</Label>
                                <Label>{item.clouds.all}%</Label>
                            </DailyDetailsGridItem>
                            <DailyDetailsGridItem>
                                <Label $grey>Wind speed:</Label>
                                <Label>{item.wind.speed}m/s</Label>
                            </DailyDetailsGridItem>
                            <DailyDetailsGridItem>
                                <Label $grey>Sea level:</Label>
                                <Label>{item.main.sea_level}m</Label>
                            </DailyDetailsGridItem>
                            <DailyDetailsGridItem>
                                <Label $grey>Feels like:</Label>
                                <Label>
                                    {Math.round(item.main.feels_like)}°C
                                </Label>
                            </DailyDetailsGridItem>
                        </DailyDetailsGrid>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </StyledAccordion>
    );
}

export default memo(ForecastWeather);
