import { Chart as _ } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { CurrentAirPollutionBarChart, Datetime } from "./BarChart.styles";
import { getBarChartData } from "../../../utils/charts/chartData";
import { getBarChartOptions } from "../../../utils/charts/chartOptions";

export default function AirPollutionBarChart({
    currentAirPollutionData,
    city,
}) {
    return (
        <CurrentAirPollutionBarChart>
            <Datetime>{currentAirPollutionData.datetime}</Datetime>
            <Bar
                data={getBarChartData(currentAirPollutionData)}
                height={400}
                width={600}
                plugins={[ChartDataLabels]}
                options={getBarChartOptions(city)}
            />
        </CurrentAirPollutionBarChart>
    );
}
