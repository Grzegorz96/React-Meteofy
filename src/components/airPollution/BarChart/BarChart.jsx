import { Chart as _ } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { AirPollutionBarChartWrapper, Datetime } from "./BarChart.styles";
import { getAirPollutionBarChartData } from "../../../utils/charts/chartData";
import { getAirPollutionBarChartOptions } from "../../../utils/charts/chartOptions";
import { format } from "date-fns";

export default function AirPollutionBarChart({
    currentAirPollutionData,
    city,
}) {
    return (
        <AirPollutionBarChartWrapper>
            <Datetime>
                {format(currentAirPollutionData.datetime, "MMMM d, yyyy")}
            </Datetime>
            <Bar
                data={getAirPollutionBarChartData(currentAirPollutionData)}
                plugins={[ChartDataLabels]}
                options={getAirPollutionBarChartOptions(city)}
            />
        </AirPollutionBarChartWrapper>
    );
}
