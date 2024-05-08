import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { currentTimePosition } from "../../../utils/charts/chartPlugins";
import { getLongTermWeatherLinearChartOptions } from "../../../utils/charts/chartOptions";

export default function LongTermWeatherLinearChart({
    filteredData,
    selectedDataset,
    selectedDateRange,
    city,
}) {
    return (
        <Line
            data={filteredData}
            plugins={[currentTimePosition]}
            options={getLongTermWeatherLinearChartOptions(
                selectedDataset,
                selectedDateRange,
                city
            )}
        />
    );
}
