import { memo } from "react";
import { CurrentAirPollutionWrapper } from "./CurrentAirPollution.styles";
import AirPollutionBarChart from "../BarChart/BarChart";
import AirQualityIndexLabel from "../AirQualityIndexLabel/AirQualityIndexLabel";

function CurrentAirPollution({ currentAirPollutionData, city }) {
    return (
        <CurrentAirPollutionWrapper>
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
