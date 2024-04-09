import { Chart as _ } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
    CurrentAirPollutionChart,
    Datetime,
} from "./CurrentAirPollution.styles";
import { getChartBarData } from "../../utils/charts/chartsData";

export default function AirPollutionBarChart({
    currentAirPollutionData,
    city,
}) {
    const data = getChartBarData(currentAirPollutionData);
    return (
        <CurrentAirPollutionChart>
            <Datetime>{currentAirPollutionData.datetime}</Datetime>
            <Bar
                data={data}
                height={400}
                width={600}
                plugins={[ChartDataLabels]}
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: `Air Pollution in ${city}`,
                            font: {
                                size: 20,
                            },
                        },
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            clamp: true,
                            font: {
                                weight: "bold",
                                size: 12,
                            },
                            color: "#a1a1a1",
                            offset: 0,
                            formatter: function (value) {
                                return value.toString() + " μg/m³";
                            },
                        },
                    },

                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: "#a1a1a1",
                            },
                        },
                        x: {
                            ticks: {
                                color: "#a1a1a1",
                            },
                        },
                    },
                }}
            />
        </CurrentAirPollutionChart>
    );
}
