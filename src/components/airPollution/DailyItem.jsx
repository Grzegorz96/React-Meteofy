import {
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
} from "react-accessible-accordion";
import {
    Day,
    StyledAccordionItemButton,
    Label,
    Description,
    FaceIcon,
    SelectButtonsWrapper,
    SelectButton,
    Wrapper,
} from "../accordion/Accordion.styles";
import { getAqiUSData } from "../../utils/getAqiUSData";
import ScrollContainer from "../accordion/ScrollableContainer";
import AirPollutionLinearChart from "./AirPollutionLinearChart";
import { useState } from "react";

export default function DailyItem({ dayData, index, forecastDays }) {
    const [selectedDataset, setSelectedDataset] = useState("PM1");
    const aqiUSData = getAqiUSData(dayData.aqius);

    return (
        <AccordionItem>
            <AccordionItemHeading>
                <StyledAccordionItemButton>
                    <FaceIcon
                        $icon={aqiUSData.faceIcon}
                        $backgroundColor={aqiUSData.aqiColor}
                    />
                    <Day>
                        {`${dayData.datetime.substring(5)} ${
                            forecastDays[index % forecastDays.length]
                        }`}
                    </Day>
                    {aqiUSData && (
                        <>
                            <Description>
                                {aqiUSData.levelsOfConcern}
                            </Description>
                            <Label $grey>{`AQI US ${dayData.aqius}`}</Label>
                        </>
                    )}
                </StyledAccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <Wrapper>
                    <SelectButtonsWrapper>
                        <SelectButton onClick={() => setSelectedDataset("PM1")}>
                            PM1
                        </SelectButton>
                        <SelectButton
                            onClick={() => setSelectedDataset("PM2.5")}
                        >
                            PM2.5
                        </SelectButton>
                        <SelectButton
                            onClick={() => setSelectedDataset("PM10")}
                        >
                            PM10
                        </SelectButton>
                        <SelectButton onClick={() => setSelectedDataset("NO2")}>
                            No2
                        </SelectButton>
                        <SelectButton onClick={() => setSelectedDataset("SO2")}>
                            SO2
                        </SelectButton>
                        <SelectButton onClick={() => setSelectedDataset("CO")}>
                            CO
                        </SelectButton>
                        <SelectButton onClick={() => setSelectedDataset("O3")}>
                            O3
                        </SelectButton>
                    </SelectButtonsWrapper>
                    <Label $fontWeight="600">
                        Hourly Air Pollution (μg/m3)
                    </Label>
                </Wrapper>

                <ScrollContainer>
                    <AirPollutionLinearChart
                        dayData={dayData}
                        selectedDataset={selectedDataset}
                    />
                </ScrollContainer>
            </AccordionItemPanel>
        </AccordionItem>
    );
}
