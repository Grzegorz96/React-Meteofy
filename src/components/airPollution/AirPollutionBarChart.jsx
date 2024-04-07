import { Chart as _ } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
    CurrentAirPollutionChart,
    Datetime,
} from "./CurrentAirPollution.styles";

export default function AirPollutionBarChart({ airPollutionData, city }) {
    return (
        <CurrentAirPollutionChart>
            <Datetime>{airPollutionData.datetime}</Datetime>
            <Bar
                data={{
                    labels: ["PM1", "PM2.5", "PM10", "NO2", "SO2", "CO", "O3"],
                    datasets: [
                        {
                            label: "Air Pollution Data (μg/m3)",
                            data: [
                                airPollutionData.pm1,
                                airPollutionData.pm2p5,
                                airPollutionData.pm10,
                                airPollutionData.no2,
                                airPollutionData.so2,
                                airPollutionData.co,
                                airPollutionData.o3,
                            ],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                                "rgba(156, 194, 19, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                                "rgba(156, 194, 19, 1)",
                            ],
                            borderWidth: 1,
                            borderRadius: 5,
                            pointStyle: "star",
                        },
                    ],
                }}
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
