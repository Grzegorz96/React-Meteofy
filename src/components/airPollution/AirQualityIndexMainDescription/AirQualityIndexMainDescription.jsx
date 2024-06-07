import {
    AirQualityIndexMainDescriptionWrapper,
    AirQualityIndexMainDescriptionText,
} from "./AirQualityIndexMainDesctription.styles";

export default function AirQualityIndexMainDescription() {
    return (
        <AirQualityIndexMainDescriptionWrapper>
            <AirQualityIndexMainDescriptionText
                $fontSize="1.3em"
                $marginBottom="5px"
            >
                WORLD'S AIR POLLUTION
            </AirQualityIndexMainDescriptionText>
            <AirQualityIndexMainDescriptionText $fontSize="1em">
                AIR QUALITY INDEX (AQI)
            </AirQualityIndexMainDescriptionText>
            <AirQualityIndexMainDescriptionText $fontSize="0.8em">
                The Air Quality Index is based on measurement of particulate
                matter (PM2.5 and PM10), Ozone (O3), Nitrogen Dioxide (NO2),
                Sulfur Dioxide (SO2) and Carbon Monoxide (CO) emissions.
            </AirQualityIndexMainDescriptionText>
        </AirQualityIndexMainDescriptionWrapper>
    );
}
