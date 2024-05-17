import styled from "styled-components";

export const AirQualityIndexMainDescriptionWrapper = styled.div`
    max-width: 1050px;
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    grid-area: airQualityIndexMainDescription;
`;

export const AirQualityIndexMainDescriptionText = styled.h3`
    font-size: ${(props) => props.$fontSize};
    color: ${({ theme }) => theme.dark.primary};
    margin-bottom: ${(props) => props.$marginBottom};
`;
