import styled from "styled-components";

export const CurrentAirPollutionBarChart = styled.div`
    width: 100%;
    max-width: 700px;
    height: 400px;
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 0px 20px 20px 20px;
`;

export const Datetime = styled.p`
    position: absolute;
    margin-top: 3px;
    font-size: 10px;
    font-weight: 600;
    color: #888;
`;
