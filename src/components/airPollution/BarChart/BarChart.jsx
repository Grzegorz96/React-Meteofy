import { Chart as _ } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { AirPollutionBarChartWrapper, Datetime } from "./BarChart.styles";
import { getAirPollutionBarChartData } from "../../../utils/charts/chartData";
import { getAirPollutionBarChartOptions } from "../../../utils/charts/chartOptions";
import { format } from "date-fns";
import { useTheme } from "styled-components";

export default function AirPollutionBarChart({
    currentAirPollutionData,
    city,
}) {
    const theme = useTheme();

    return (
        <AirPollutionBarChartWrapper>
            <Datetime>
                {currentAirPollutionData?.datetime
                    ? format(currentAirPollutionData.datetime, "MMMM d, yyyy")
                    : "Error with getting data"}
            </Datetime>
            <Bar
                data={getAirPollutionBarChartData(currentAirPollutionData)}
                plugins={[ChartDataLabels]}
                options={getAirPollutionBarChartOptions(city, theme)}
            />
        </AirPollutionBarChartWrapper>
    );
}
