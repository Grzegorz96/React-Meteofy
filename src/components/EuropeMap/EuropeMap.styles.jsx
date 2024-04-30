import styled from "styled-components";

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/openWeatherIcons/${props.$icon}.png`,
}))`
    width: 100% !important;
`;

export const Temp = styled.h3`
    text-align: center;
`;
