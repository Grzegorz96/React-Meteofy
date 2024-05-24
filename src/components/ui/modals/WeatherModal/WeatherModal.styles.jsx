import styled from "styled-components";
import { darkTheme, lightTheme } from "../../../../utils/styles/theme";

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/openWeatherIcons/${props.$icon}.png`,
}))``;

export const Title = styled.p`
    font-size: 30px;
    color: ${({ $isDarkMode }) =>
        $isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary};

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    color: ${({ $isDarkMode }) =>
        $isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary};
`;

export const WeatherInfo = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: ${({ $isDarkMode }) =>
        $isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary};
`;

export const WeatherInfoValue = styled.span`
    font-weight: bold;
    color: ${({ $isDarkMode }) =>
        $isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary};
`;
