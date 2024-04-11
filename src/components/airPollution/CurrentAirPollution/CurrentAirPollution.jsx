import { memo } from "react";
import { CurrentAirPollutionWrapper } from "./CurrentAirPollution.styles";
import AirPollutionBarChart from "../BarChart/BarChart";
import AirQualityIndexLabel from "../AirQualityIndexLabel/AirQualityIndexLabel";
import AirQualityIndexMainDescription from "../AirQualityIndexMainDescription/AirQualityIndexMainDescription";

function CurrentAirPollution({ currentAirPollutionData, city }) {
    return (
        <CurrentAirPollutionWrapper>
            <AirQualityIndexMainDescription />
            <AirPollutionBarChart
                currentAirPollutionData={currentAirPollutionData}
                city={city}
            />
            <AirQualityIndexLabel
                currentAirPollutionData={currentAirPollutionData}
            />
        </CurrentAirPollutionWrapper>
    );
}

export default memo(CurrentAirPollution);
