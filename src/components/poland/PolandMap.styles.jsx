import styled from "styled-components";
import MapSVG from "../../assets/images/poland-map.svg?react";

export const MapContainer = styled.div`
    position: relative;
    height: 100%;
`;

export const MapItemsLayer = styled.div``;

export const PolandMapSVG = styled(MapSVG)`
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
    height: 38px;
    height: 38px;
`;
