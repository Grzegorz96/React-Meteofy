import styled from "styled-components";

export const MapLayer = styled.div`
    width: 700px;
`;

export const MapContainer = styled.svg`
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
