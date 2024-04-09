import { POLLUTION_NAMES } from "../constants/pollutionNames";

export function getFilteredLinearChartData(dayData, selectedDataset) {
    return {
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
}

export function getChartBarData(currentAirPollutionData) {
    return {
        labels: POLLUTION_NAMES,
        datasets: [
            {
                label: "Air Pollution Data (μg/m3)",
                data: [
                    currentAirPollutionData.pm1,
                    currentAirPollutionData.pm2p5,
                    currentAirPollutionData.pm10,
                    currentAirPollutionData.no2,
                    currentAirPollutionData.so2,
                    currentAirPollutionData.co,
                    currentAirPollutionData.o3,
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
            },
        ],
    };
}
