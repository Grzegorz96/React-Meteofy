import styled from "styled-components";

export const CurrentWeatherWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    color: ${({ theme }) => theme.dark.text};
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 15px;
    gap: 15px;
    max-width: 800px;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/visualCrossingWeatherIcons/${props.$icon}.svg`,
}))`
    width: 80px;
    height: 80px;
`;

export const Wrapper = styled.div`
    background-color: #242424;
    display: flex;
    flex-direction: ${(props) => props.$flexDirection || "row"};
    align-items: ${(props) => props.$alignItems || "center"};
    justify-content: ${(props) => props.$justifyContent || "center"};
    border-radius: 4px;
    gap: ${(props) => props.$gap || "15px"};
    padding: 5px;
    width: ${(props) => props.$width};
    max-width: ${(props) => props.$maxWidth};
`;

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #e02d2d;
    @media (max-width: 720px) {
        flex-direction: row;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    background-color: #e02d2d;
`;

export const Text = styled.p`
    color: ${(props) => props.color || props.theme.dark.text};
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    line-height: ${(props) => props.$lineHeight};
    letter-spacing: ${(props) => props.$letterSpacing};
    margin: ${(props) => props.$margin};
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
`;
