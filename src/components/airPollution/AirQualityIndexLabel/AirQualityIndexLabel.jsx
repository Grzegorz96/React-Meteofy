import { getAqiUSData } from "../../../utils/helpers";
import { aqiUSData } from "../../../utils/constants/aqiUSData";
import {
    AirQualityIndex,
    AirQualityIndexHeader,
    FaceImg,
    Label,
    Wrapper,
    AirQualityIndexDescription,
    ErrorInfo,
    AirQualityIndexFooter,
    FaceFooter,
    FaceFooterDescription,
} from "./AirQualityIndexLabel.styles";

export default function AirQualityIndexLabel({ currentAirPollutionData }) {
    const currentAqiUSData = getAqiUSData(currentAirPollutionData.aqius);

    return (
        <AirQualityIndex>
            {currentAqiUSData ? (
                <>
                    <AirQualityIndexHeader
                        $backqroundColor={currentAqiUSData.aqiColor}
                    >
                        <FaceImg $icon={currentAqiUSData.faceIcon} />
                        <Wrapper>
                            <Label $fontSize="40px" $fontWeight="600">
                                {currentAirPollutionData.aqius}
                            </Label>
                            <Label $fontSize="12px" $fontWeight="300">
                                AQI US
                            </Label>
                        </Wrapper>
                        <Label $fontSize="14px" $fontWeight="600">
                            {currentAqiUSData.levelsOfConcern}
                        </Label>
                        <Label>
                            <currentAqiUSData.thermometerIcon fontSize={40} />
                        </Label>
                    </AirQualityIndexHeader>
                    <AirQualityIndexDescription>
                        {currentAqiUSData.aqiDescription}
                    </AirQualityIndexDescription>
                    <AirQualityIndexFooter>
                        <Wrapper>
                            <FaceFooter
                                $icon={aqiUSData[0].faceIcon}
                                $backqroundColor={aqiUSData[0].aqiColor}
                            />
                            <FaceFooterDescription>
                                {`${aqiUSData[0].aqiUSLevel[0]}-${aqiUSData[0].aqiUSLevel[1]}`}
                                <br />
                                {aqiUSData[0].levelsOfConcern}
                            </FaceFooterDescription>
                        </Wrapper>
                        <Wrapper>
                            <FaceFooter
                                $icon={aqiUSData[1].faceIcon}
                                $backqroundColor={aqiUSData[1].aqiColor}
                            />
                            <FaceFooterDescription>
                                {`${aqiUSData[1].aqiUSLevel[0]}-${aqiUSData[1].aqiUSLevel[1]}`}
                                <br />
                                {aqiUSData[1].levelsOfConcern}
                            </FaceFooterDescription>
                        </Wrapper>
                        <Wrapper>
                            <FaceFooter
                                $icon={aqiUSData[2].faceIcon}
                                $backqroundColor={aqiUSData[2].aqiColor}
                            />
                            <FaceFooterDescription>
                                {`${aqiUSData[2].aqiUSLevel[0]}-${aqiUSData[2].aqiUSLevel[1]}`}
                                <br />
                                {aqiUSData[2].levelsOfConcern}
                            </FaceFooterDescription>
                        </Wrapper>
                        <Wrapper>
                            <FaceFooter
                                $icon={aqiUSData[3].faceIcon}
                                $backqroundColor={aqiUSData[3].aqiColor}
                            />
                            <FaceFooterDescription>
                                {`${aqiUSData[3].aqiUSLevel[0]}-${aqiUSData[3].aqiUSLevel[1]}`}
                                <br />
                                {aqiUSData[3].levelsOfConcern}
                            </FaceFooterDescription>
                        </Wrapper>
                        <Wrapper>
                            <FaceFooter
                                $icon={aqiUSData[4].faceIcon}
                                $backqroundColor={aqiUSData[4].aqiColor}
                            />
                            <FaceFooterDescription>
                                {`${aqiUSData[4].aqiUSLevel[0]}-${aqiUSData[4].aqiUSLevel[1]}`}
                                <br />
                                {aqiUSData[4].levelsOfConcern}
                            </FaceFooterDescription>
                        </Wrapper>
                        <Wrapper>
                            <FaceFooter
                                $icon={aqiUSData[5].faceIcon}
                                $backqroundColor={aqiUSData[5].aqiColor}
                            />
                            <FaceFooterDescription>
                                {`${aqiUSData[5].aqiUSLevel[0]}-500`}
                                <br />
                                {aqiUSData[5].levelsOfConcern}
                            </FaceFooterDescription>
                        </Wrapper>
                    </AirQualityIndexFooter>
                </>
            ) : (
                <ErrorInfo>
                    No information about the Air Quality Index
                </ErrorInfo>
            )}
        </AirQualityIndex>
    );
}
