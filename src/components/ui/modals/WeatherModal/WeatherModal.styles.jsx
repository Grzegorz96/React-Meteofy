import styled from "styled-components";

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/openWeatherIcons/${props.$icon ?? "unknown"}.png`,
}))``;

export const Title = styled.p`
    font-size: 30px;
    color: ${({ $theme }) => $theme.textPrimary};

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    color: ${({ $theme }) => $theme.textSecondary};
`;

export const WeatherInfo = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: ${({ $theme }) => $theme.textSecondary};
`;

export const WeatherInfoValue = styled.span`
    font-weight: bold;
    color: ${({ $theme }) => $theme.textPrimary};
`;
