import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ForecastAirPollutionChart } from "./ForecastAirPollution.styles";

export default function AirPollutionLinearChart({ filteredData }) {
    return (
        <ForecastAirPollutionChart>
            <Line
                data={filteredData}
                plugins={[ChartDataLabels]}
                options={{
                    layout: {
                        padding: {
                            top: 15,
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            clamp: true,
                            font: {
                                weight: "bold",
                                size: 12,
                            },
                            offset: -4,
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                        x: {
                            ticks: {
                                font: {
                                    size: 10,
                                },
                            },
                        },
                    },

                    // responsive: true,
                    // maintainAspectRatio: false,
                }}
                width={1200}
            />
        </ForecastAirPollutionChart>
    );
}
