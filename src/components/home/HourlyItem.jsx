import React from "react";
import { HourlyLabel, Label, WeatherIcon } from "../accordion/Accordion.styles";

export default function HourlyItem({ hourData }) {
    return (
        <HourlyLabel>
            <Label>{hourData.datetime.substring(0, 5)}</Label>
            <Label $fontSize="10px" $fontWeight="600" $height="13px">
                {hourData.precipprob >= 0.5
                    ? `${Math.round(hourData.precipprob)}%`
                    : null}
            </Label>
            <WeatherIcon $icon={hourData.icon} />
            <Label>{Math.round(hourData.temp)}°C</Label>
        </HourlyLabel>
    );
}
