import styled from "styled-components";

export const CurrentAirPollutionWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    height: 400px;
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 0px 20px 20px 20px;
    margin-top: 40px;
    position: relative;
    z-index: -1;
`;

export const Datetime = styled.p`
    position: absolute;
    margin-top: 3px;
    font-size: 10px;
    font-weight: 600;
    color: #888;
`;

export const AirQualityIndex = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.dark.text};
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    width: 100%;
    max-width: 600px;
    min-height: 200px;
    border-radius: 6px;
`;
