import styled from "styled-components";
import MapSVG from "../../assets/images/poland-map.svg?react";
import { animated } from "@react-spring/web";

export const MapContainer = styled.div`
    position: relative;
    height: 100%;
`;

export const MapItemsLayer = styled.div``;

export const PolandMapSVG = styled(animated(MapSVG))`
    height: 100%;
    width: 100%;

    path {
        stroke: #747373;
        stroke-width: 0.5;
        fill: #eeeeee;
        cursor: pointer;

        &:hover {
            fill: #ffffff;
        }
    }
`;

export const MapItem = styled.div`
    position: absolute;
    z-index: 3;
    left: ${(props) => props.$left};
    top: ${(props) => props.$top};
    text-align: center;
    pointer-events: none;
`;

export const DataWrapper = styled.div`
    background-color: #c5c5c567;
    border-radius: 6px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const Temp = styled.span`
    font-weight: bold;
    font-size: 16px;
`;

export const Text = styled.span`
    font-weight: bold;
    font-size: 13px;
`;

export const WeaterIcon = styled.img.attrs((props) => ({
    src: `src/assets/openWeatherIcons/${props.$icon}.png`,
}))`
    width: ${({ $width }) => $width || "38px"};
`;

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
