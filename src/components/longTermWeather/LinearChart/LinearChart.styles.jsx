import styled from "styled-components";

export const LongTermWeatherLinearChartWrapper = styled.div`
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 0px 20px 20px 20px;
    margin-top: 30px;
    width: 100%;
    height: 100%;
`;
