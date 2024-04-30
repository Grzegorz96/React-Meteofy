import styled from "styled-components";

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/openWeatherIcons/${props.$icon}.png`,
}))``;

export const Paragraph = styled.p`
    font-size: 18px;
`;

export const WeatherInfo = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: #757575;
`;

export const WeatherInfoValue = styled.span`
    font-weight: bold;
    color: #212121;
`;
