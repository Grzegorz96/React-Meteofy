import styled from "styled-components";

export const CurrentWeatherWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        "main main second"
        "main main second"
        "details details details";
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    color: ${({ theme }) => theme.dark.text};
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 15px;
    gap: 10px;
    max-width: 800px;

    @media (max-width: 570px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "main"
            "second"
            "details";
    }

    @media (max-width: 520px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    background-color: #242424;
    display: flex;
    border-radius: 4px;
`;

export const TempInfo = styled(Wrapper)`
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const MainWrapper = styled(Wrapper)`
    grid-area: main;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    gap: 5px;
`;

export const SecondWrapper = styled.div`
    grid-area: second;
    display: grid;
    gap: 10px;

    @media (max-width: 570px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;

export const SunInfo = styled(Wrapper)`
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const SunItems = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 5px;
    gap: 5px;
`;

export const SunValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px;
`;

export const DetailsWrapper = styled.div`
    grid-area: details;

    display: grid;
    grid-template-columns: repeat(8, auto);
    gap: 10px;
    justify-content: center;

    @media (max-width: 810px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 570px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Detail = styled(Wrapper)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 5px;
`;

export const DetailValue = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    padding: 5px;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/visualCrossingWeatherIcons/${props.$icon}.svg`,
}))`
    width: 80px;
    height: 80px;
`;

export const Text = styled.p`
    color: ${(props) => props.color || props.theme.dark.text};
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    line-height: ${(props) => props.$lineHeight};
    letter-spacing: ${(props) => props.$letterSpacing};
    text-align: center;
`;
