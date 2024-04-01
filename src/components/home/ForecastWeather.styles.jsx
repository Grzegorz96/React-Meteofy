import styled from "styled-components";
import { Accordion, AccordionItemButton } from "react-accessible-accordion";

export const DailyItem = styled.div`
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
export const Title = styled.label`
    font-size: 20px;
    font-weight: 700;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `icons/${props.$icon}.png`,
}))`
    width: 40px;
`;
export const Day = styled.label`
    color: ${({ theme }) => theme.dark.primary};
    flex: 1 1;
    font-weight: 600;
    margin-left: 15px;
`;
export const Description = styled.label`
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
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-inline: 10px;
`;

export const DailyDetailsGridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
`;

export const Label = styled.label`
    color: ${(props) => (props.$grey ? "#757575" : "#212121")};
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
