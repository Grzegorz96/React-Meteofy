import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const MapContainer = styled.div`
    position: relative;
    width: 750px;
`;

export const MapItemsLayer = styled.div``;

export const PolandMapSVG = styled(ReactSVG).attrs({
    src: "/src/assets/images/poland-map.svg",
})`
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
    src: `/assets/openWeatherIcons/${props.$icon}.png`,
}))`
    height: 38px;
    height: 38px;
`;
