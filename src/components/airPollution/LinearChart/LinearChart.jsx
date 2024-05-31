import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getAirPollutionlinearChartOptions } from "../../../utils/charts/chartOptions";
import { LinearChartWrapper } from "./LinearChart.styles";
import { useTheme } from "styled-components";

export default function AirPollutionLinearChart({ filteredData }) {
    const theme = useTheme();

    return (
        <LinearChartWrapper>
            <Line
                data={filteredData}
                plugins={[ChartDataLabels]}
                options={getAirPollutionlinearChartOptions(theme)}
            />
        </LinearChartWrapper>
    );
}
