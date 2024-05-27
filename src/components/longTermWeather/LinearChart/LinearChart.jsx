import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { currentTimePosition } from "../../../utils/charts/chartPlugins";

export default function LongTermWeatherLinearChart({ filteredData, options }) {
    return (
        <Line
            data={filteredData}
            plugins={[currentTimePosition]}
            options={options}
        />
    );
}
