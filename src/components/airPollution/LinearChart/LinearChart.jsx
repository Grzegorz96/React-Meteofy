import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { airPollutionlinearChartOptions } from "../../../utils/charts/chartOptions";
import { LinearChartWrapper } from "./LinearChart.styles";

export default function AirPollutionLinearChart({ filteredData }) {
    return (
        <LinearChartWrapper>
            <Line
                data={filteredData}
                plugins={[ChartDataLabels]}
                options={airPollutionlinearChartOptions}
            />
        </LinearChartWrapper>
    );
}
