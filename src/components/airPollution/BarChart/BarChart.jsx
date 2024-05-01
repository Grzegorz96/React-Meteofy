import { Chart as _ } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { AirPollutionBarChartWrapper, Datetime } from "./BarChart.styles";
import { getAirPollutionBarChartData } from "../../../utils/charts/chartData";
import { getAirPollutionBarChartOptions } from "../../../utils/charts/chartOptions";

export default function AirPollutionBarChart({
    currentAirPollutionData,
    city,
}) {
    return (
        <AirPollutionBarChartWrapper>
            <Datetime>{currentAirPollutionData.datetime}</Datetime>
            <Bar
                data={getAirPollutionBarChartData(currentAirPollutionData)}
                height={380}
                width={660}
                plugins={[ChartDataLabels]}
                options={getAirPollutionBarChartOptions(city)}
            />
        </AirPollutionBarChartWrapper>
    );
}
