import styled from "styled-components";
import { animated } from "@react-spring/web";

export const PolandMapSVG = styled(animated.svg)`
    max-height: 100%;
    max-width: 100%;
    margin: auto;

    path {
        stroke: ${({ theme }) => theme.textSecondary};
        stroke-width: 0.5;
        fill: ${({ theme }) => theme.secondary};
        cursor: pointer;
        outline: none;
        transition: fill 0.25s ease-in-out, stroke 0.25s ease-in-out;

        &:focus-visible,
        &:hover {
            fill: ${({ theme }) => theme.primary};
            transition: none;
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
    background-color: ${({ theme }) => theme.textSecondary + "30"};
    border-radius: 6px;
    padding-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.25s ease-in-out;
`;

export const Temp = styled.span`
    font-weight: bold;
    font-size: 11px;
    color: ${({ theme }) => theme.textPrimary};
    transition: color 0.25s ease-in-out;
`;

export const Text = styled.span`
    font-weight: bold;
    font-size: 10px;
    color: ${({ theme }) => theme.textPrimary};
    transition: color 0.25s ease-in-out;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/openWeatherIcons/${props.$icon ?? "unknown"}.png`,
}))`
    width: 28px;
`;
