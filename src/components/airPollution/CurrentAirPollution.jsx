import { CurrentAirPollutionWrapper } from "./CurrentAirPollution.styles";
import AirPollutionBarChart from "./AirPollutionBarChart";
import AirQualityIndexLabel from "./AirQualityIndexLabel";

export default function CurrentAirPollution({ airPollutionData, city }) {
    return (
        <CurrentAirPollutionWrapper>
            <AirPollutionBarChart
                airPollutionData={airPollutionData}
                city={city}
            />
            <AirQualityIndexLabel airPollutionData={airPollutionData} />
        </CurrentAirPollutionWrapper>
    );
}
