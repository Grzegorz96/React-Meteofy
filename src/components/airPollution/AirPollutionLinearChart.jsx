import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ForecastAirPollutionChart } from "./ForecastAirPollution.styles";

export default function AirPollutionLinearChart({ dayData, selectedDataset }) {
    console.log(dayData);

    const filteredData = {
        labels: dayData.hours.map(({ datetime }) => datetime.substring(0, 5)),
        datasets: [
            {
                label: selectedDataset,
                data: dayData.hours.map(
                    ({ pm1, pm2p5, pm10, no2, so2, co, o3 }) => {
                        switch (selectedDataset) {
                            case "PM1":
                                return pm1;
                            case "PM2.5":
                                return pm2p5;
                            case "PM10":
                                return pm10;
                            case "NO2":
                                return no2;
                            case "SO2":
                                return so2;
                            case "CO":
                                return co;
                            case "O3":
                                return o3;
                            default:
                                return null;
                        }
                    }
                ),
            },
        ],
    };

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
