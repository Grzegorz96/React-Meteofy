import styled from "styled-components";
import { Accordion, AccordionItemButton } from "react-accessible-accordion";

export const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `/assets/weatherIcons/${props.$icon}.svg`,
}))`
    width: 35px;
    height: 35px;
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

export const ScrollContainer = styled.div`
    overflow-y: auto;
    display: flex;
    gap: 3px;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
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

export const NavigateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: ${(props) => props.$left};
    border-bottom-right-radius: ${(props) => props.$right};
    cursor: pointer;
    font-size: 20px;
    border: 2px solid ${(props) => props.theme.dark.primary};
`;

export const ScrollWrapper = styled.div`
    display: flex;
    gap: 5px;
    background-color: #f5f5f5ac;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-inline: 10px;
`;
