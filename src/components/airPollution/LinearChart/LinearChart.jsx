import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { airPollutionlinearChartOptions } from "../../../utils/charts/chartOptions";

export default function AirPollutionLinearChart({ filteredData }) {
    return (
        <Line
            data={filteredData}
            plugins={[ChartDataLabels]}
            options={airPollutionlinearChartOptions}
            width={822}
            height={120}
        />
    );
}
