import { Chart as _ } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { LongTermWeatherLinearChartWrapper } from "./LinearChart.styles";

export default function LongTermWeatherLinearChart({ seasonalData }) {
    console.log(seasonalData);

    const filteredLabels = seasonalData.time.map((time) => {
        if (time.slice(8, 10).includes("01")) {
            return time.slice(0, 10);
        } else {
            return "";
        }
    });
    console.log(filteredLabels);
    return (
        <LongTermWeatherLinearChartWrapper>
            <Line
                data={{
                    labels: seasonalData.time.map((time) => time.slice(0, 10)),
                    // labels: filteredLabels,

                    datasets: [
                        {
                            label: "Max temperature",
                            data: seasonalData.temperature_2m_max_member01,
                            borderWidth: 1.5,
                            // pointRadius: 0,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        // xAxes: [{
                        //     type: 'time',
                        //     time: {
                        //       unit: 'month'
                        //     }
                        //   }],
                        y: {
                            ticks: {
                                callback: function (value) {
                                    return value + "°C";
                                },
                                color: "#ffffff",
                            },
                            beginAtZero: true,
                        },
                        x: {
                            // type: "time",
                            time: {
                                unit: "day",
                                displayFormats: {
                                    day: "DD/MM",
                                },
                            },
                            beginAtZero: true,
                            grid: {
                                // tickColor: "#ffffff",
                            },
                            // ticks: {
                            //     color: "#ffffff",
                            //     maxTicksLimit: 10,
                            // },
                        },
                    },
                }}
                // plugins={[ChartDataLabels]}
            />
        </LongTermWeatherLinearChartWrapper>
    );
}
