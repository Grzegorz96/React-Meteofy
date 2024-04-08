import { CurrentAirPollutionWrapper } from "./CurrentAirPollution.styles";
import AirPollutionBarChart from "./AirPollutionBarChart";
import AirQualityIndexLabel from "./AirQualityIndexLabel";

export default function CurrentAirPollution({ currentAirPollutionData, city }) {
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
