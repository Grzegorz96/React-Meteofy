import styled from "styled-components";

export const AirPollutionBarChartWrapper = styled.div`
    border-radius: 6px 0 0 6px;
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.secondary};
    grid-area: airPollutionBarChart;
    height: 371px;
    position: relative;
    z-index: -1;

    @media (max-width: 900px) {
        border-radius: 0 0 6px 6px;
    }
`;

export const Datetime = styled.p`
    position: absolute;
    top: 3px;
    left: 15px;
    font-size: 10px;
    font-weight: 600;
    color: #888;
`;
