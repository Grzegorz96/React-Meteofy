import EuropeMapSVG from "../../assets/images/europe-map.svg?react";
import EuropeMapSVG2 from "../../assets/images/europe-map2.svg?react";
import styled from "styled-components";

export const StyledEuropeMap = styled(EuropeMapSVG2)`
    height: 100%;
    width: 100%;
    border: 1px solid #000;

    path {
        stroke: #747373;
        stroke-width: 1;
        fill: #eeeeee;
        cursor: pointer;

        &:hover {
            fill: #ffffff;
        }
    }
`;
