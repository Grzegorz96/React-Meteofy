import styled from "styled-components";
import { Accordion, AccordionItemButton } from "react-accessible-accordion";

export const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/assets/visualCrossingWeatherIcons/${props.$icon}.svg`,
}))`
    width: 40px;
    height: 40px;
`;

export const FaceIcon = styled.img.attrs((props) => ({
    src: `/assets/airPollutionIcons/${props.$icon}.svg`,
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
    margin-left: 15px;
`;

export const Description = styled.div`
    flex: 1 1;
    margin-right: 15px;
    text-align: right;
`;

export const StyledAccordion = styled(Accordion)`
    width: 90%;
    max-width: 900px;
`;

export const DailyDetailsGrid = styled.div`
    background-color: #f5f5f5ac;
    grid-row-gap: 0;
    grid-column-gap: 15px;
    row-gap: 0;
    column-gap: 30px;
    display: grid;
    flex: 1 1;
    grid-template-columns: auto auto;
    padding: 5px 15px;
    margin-inline: 10px;
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
`;

export const SelectButtonsWrapper = styled.div`
    display: flex;
    gap: 5px;
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
    cursor: pointer;
`;

export const DailyDetailsGridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
`;

export const Label = styled.div`
    color: ${(props) => (props.$grey ? "#757575" : "#212121")};
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    height: ${(props) => props.$height};
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
`;

export const HourlyLabel = styled.div`
    height: 120px;
    min-width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;