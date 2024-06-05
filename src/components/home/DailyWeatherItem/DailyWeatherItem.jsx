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
import { format } from "date-fns";

export default function DailyWeatherItem({ dayData, scrollableContainerRef }) {
    return (
        <AccordionItem>
            <AccordionItemHeading>
                <StyledAccordionItemButton>
                    <WeatherIcon
                        $icon={dayData?.icon}
                        width={"30px"}
                        height={"30px"}
                    />
                    <Day>
                        {dayData?.datetime
                            ? format(dayData.datetime, "MM-dd EEEE")
                            : "Error"}
                    </Day>
                    <Description>{dayData?.conditions ?? "Error"}</Description>
                    <Label $grey>
                        {Math.round(dayData?.tempmax ?? 0)}°C/
                        {Math.round(dayData?.tempmin ?? 0)}°C
                    </Label>
                </StyledAccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <DailyDetailsGrid>
                    <DailyDetailsGridItem>
                        <Label $grey>Feels like:</Label>
                        <Label>{Math.round(dayData?.feelslike ?? 0)}°C</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Pressure:</Label>
                        <Label>{Math.round(dayData?.pressure ?? 0)} hPa</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Humidity:</Label>
                        <Label>{Math.round(dayData?.humidity ?? 0)}%</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Clouds:</Label>
                        <Label>{Math.round(dayData?.cloudcover ?? 0)}%</Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Wind speed:</Label>
                        <Label>
                            {Math.round(dayData?.windspeed ?? 0)} km/h
                        </Label>
                    </DailyDetailsGridItem>
                    <DailyDetailsGridItem>
                        <Label $grey>Visibility:</Label>
                        <Label>{Math.round(dayData?.visibility ?? 0)} km</Label>
                    </DailyDetailsGridItem>
                </DailyDetailsGrid>
                <ScrollContainer
                    scrollableContainerRef={scrollableContainerRef}
                >
                    {dayData?.hours?.map((hourData, index) => (
                        <HourlyWeatherItem key={index} hourData={hourData} />
                    ))}
                </ScrollContainer>
            </AccordionItemPanel>
        </AccordionItem>
    );
}
