import styled, { css } from "styled-components";
import { Accordion, AccordionItemButton } from "react-accessible-accordion";

export const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/src/assets/visualCrossingWeatherIcons/${props.$icon}.svg`,
}))`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${(props) =>
        props.width === "40px" &&
        css`
            @media (max-width: 550px) {
                width: 30px;
                height: 30px;
            }
        `}
`;

export const FaceIcon = styled.img.attrs((props) => ({
    src: `/src/assets/airPollutionIcons/${props.$icon}.svg`,
}))`
    height: 38px;
    height: 38px;
    background-color: ${(props) => props.$backgroundColor};
    border-radius: 6px;
    border: 1px solid black;
    transition: background-color 0.5s ease-in-out;
`;

export const Day = styled.div`
    color: ${({ theme }) => theme.dark.primary};
    flex: 1 1;
    font-weight: 600;

    @media (max-width: 370px) {
        font-size: 10px;
    }
`;

export const Description = styled.div`
    flex: 1 1;
    text-align: right;

    @media (max-width: 370px) {
        font-size: 10px;
    }
`;

export const StyledAccordion = styled(Accordion)`
    width: 90%;
    max-width: 900px;
`;

export const DailyDetailsGrid = styled.div`
    background-color: #f5f5f5ac;
    grid-row-gap: 0;
    grid-column-gap: 30px;
    row-gap: 0;
    display: grid;
    flex: 1 1;
    grid-template-columns: auto auto;
    padding: 5px 15px;
    margin-inline: 10px;

    @media (max-width: 500px) {
        grid-column-gap: 10px;
    }

    @media (max-width: 400px) {
        grid-template-columns: auto;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-inline: 10px;
    padding: 5px 0;
    background-color: #f5f5f5ac;

    @media (max-width: 600px) {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        font-size: 12px;
    }
`;

export const SelectButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-inline: 5px;
`;

export const SelectButton = styled.button`
    background-color: ${({ $active, theme }) =>
        $active ? theme.dark.primary : theme.dark.text};
    color: ${({ $active, theme }) =>
        $active ? theme.dark.text : theme.dark.primary};
    border: 2px solid ${(props) => props.theme.dark.primary};
    font-weight: 600;
    padding: 7px;
    border-radius: 10px;
    width: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus-visible {
        box-shadow: 0 0 0 2px ${(props) => props.theme.dark.primary};
        outline: none;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        width: 50px;
    }

    @media (max-width: 500px) {
        font-size: 10px;
        width: 40px;
    }
`;

export const DailyDetailsGridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;

    @media (max-width: 550px) {
        font-size: 14px;
    }
`;

export const Label = styled.div`
    color: ${(props) => (props.$grey ? "#757575" : "#212121")};
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    height: ${(props) => props.$height};
    text-align: center;
`;

export const StyledAccordionItemButton = styled(AccordionItemButton)`
    background-color: #f5f5f5;
    border-radius: 15px;
    height: 40px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    padding: 5px 20px;
    gap: 10px;

    &:focus-visible {
        outline: 2px solid ${(props) => props.theme.dark.primary};
    }

    @media (max-width: 500px) {
        padding: 5px 10px;
    }

    @media (max-width: 450px) {
        font-size: 12px;
    }

    @media (max-width: 280px) {
        gap: 5px;
    }
`;

export const HourlyLabel = styled.div`
    min-width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media (max-width: 550px) {
        font-size: 14px;
    }
`;
