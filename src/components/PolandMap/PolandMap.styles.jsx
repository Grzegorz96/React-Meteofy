import styled from "styled-components";
import { animated } from "@react-spring/web";

export const PolandMapSVG = styled(animated.svg)`
    max-height: 100%;
    max-width: 100%;
    margin: auto;

    path {
        stroke: #747373;
        stroke-width: 0.5;
        fill: #eeeeee;
        cursor: pointer;
        outline: none;

        &:focus-visible,
        &:hover {
            fill: #ffffff;
        }
    }
`;

export const MapItem = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    gap: 3px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const DataWrapper = styled.div`
    background-color: #c5c5c567;
    border-radius: 6px;
    padding-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Temp = styled.span`
    font-weight: bold;
    font-size: 11px;
`;

export const Text = styled.span`
    font-weight: bold;
    font-size: 10px;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/openWeatherIcons/${props.$icon}.png`,
}))`
    width: 28px;
`;
