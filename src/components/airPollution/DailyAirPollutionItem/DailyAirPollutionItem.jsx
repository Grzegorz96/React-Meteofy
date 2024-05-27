import { useState } from "react";
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
    DailyDetailsFlex,
} from "../../ui/Accordion/Accordion.styles";
import { getAqiUSData } from "../../../utils/helpers";
import ScrollContainer from "../../ui/ScrollContainer/ScrollContainer";
import AirPollutionLinearChart from "../LinearChart/LinearChart";
import { POLLUTION_NAMES } from "../../../utils/constants/pollutionNames";
import { getAirPollutionFilteredLinearChartData } from "../../../utils/charts/chartData";

export default function DailyAirPollutionItem({
    dayData,
    index,
    forecastDays,
    scrollableContainerRef,
}) {
    const [selectedDataset, setSelectedDataset] = useState(POLLUTION_NAMES[0]);
    const filteredData = getAirPollutionFilteredLinearChartData(
        dayData,
        selectedDataset
    );

    const aqiUSData = getAqiUSData(dayData.aqius);

    return (
        <AccordionItem>
            <AccordionItemHeading>
                <StyledAccordionItemButton>
                    <FaceIcon
                        $icon={aqiUSData?.faceIcon}
                        $backgroundColor={aqiUSData?.aqiColor}
                    />
                    <Day>
                        {`${dayData.datetime.substring(5)} ${
                            forecastDays[index % forecastDays.length]
                        }`}
                    </Day>
                    <Description>{aqiUSData?.levelsOfConcern}</Description>
                    <Label $grey>{`AQI US ${dayData.aqius}`}</Label>
                </StyledAccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <DailyDetailsFlex>
                    <SelectButtonsWrapper>
                        {POLLUTION_NAMES.map((pollutionName) => (
                            <SelectButton
                                $active={selectedDataset === pollutionName}
                                key={pollutionName}
                                onClick={() => {
                                    scrollableContainerRef.current.style.scrollBehavior =
                                        "smooth";
                                    scrollableContainerRef.current.scrollLeft = 0;
                                    setSelectedDataset(pollutionName);
                                }}
                            >
                                {pollutionName}
                            </SelectButton>
                        ))}
                    </SelectButtonsWrapper>
                    <Label $fontWeight="600">
                        Hourly Air Pollution (μg/m3)
                    </Label>
                </DailyDetailsFlex>
                <ScrollContainer
                    scrollableContainerRef={scrollableContainerRef}
                >
                    <AirPollutionLinearChart filteredData={filteredData} />
                </ScrollContainer>
            </AccordionItemPanel>
        </AccordionItem>
    );
}
