import styled from "styled-components";

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/openWeatherIcons/${props.icon}.png`,
}))`
    width: 50px;
    height: 50px;
`;
