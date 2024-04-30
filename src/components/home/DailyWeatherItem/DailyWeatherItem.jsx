import {
    StyledAccordionItemButton,
    WeatherIcon,
    Day,
    Description,
    DailyDetailsGrid,
    DailyDetailsGridItem,
    Label,
} from "../../ui/Accordion/Accordion.styles";
import {
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
} from "react-accessible-accordion";
import ScrollContainer from "../../ui/ScrollContainer/ScrollContainer";
import HourlyWeatherItem from "../HourlyWeatherItem/HourlyWeatherItem";

export default function DailyWeatherItem({ index, dayData, forecastDays }) {
    return (
        <AccordionItem>
            <AccordionItemHeading>
                <StyledAccordionItemButton>
                    <WeatherIcon $icon={dayData.icon} />
                    <Day>
                        {`${dayData.datetime.substring(5)} ${
                            forecastDays[index % forecastDays.length]
                        }`}
                    </Day>
                    <Description>{dayData.conditions}</Description>
                    <Label $grey>
                        {Math.round(dayData.tempmin)}°C /
                        {Math.round(dayData.tempmax)}°C
                    </Label>
                </StyledAccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <DailyDetailsGrid>
                    <DailyDetailsGridItem>
                        <Label $grey>Pressure:</Label>
                        <Label>{Math.round(dayData.pressure)} hPa</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Humidity:</Label>
                        <Label>{Math.round(dayData.humidity)}%</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Clouds:</Label>
                        <Label>{Math.round(dayData.cloudcover)}%</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Wind speed:</Label>
                        <Label>{Math.round(dayData.windspeed)} km/h</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Visibility:</Label>
                        <Label>{Math.round(dayData.visibility)} km</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Feels like:</Label>
                        <Label>{Math.round(dayData.feelslike)}°C</Label>
                    </DailyDetailsGridItem>
                </DailyDetailsGrid>
                <ScrollContainer>
                    {dayData.hours.map((hourData, index) => (
                        <HourlyWeatherItem key={index} hourData={hourData} />
                    ))}
                </ScrollContainer>
            </AccordionItemPanel>
        </AccordionItem>
    );
}
