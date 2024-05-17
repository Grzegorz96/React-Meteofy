export function getAirPollutionBarChartOptions(city) {
    return {
        plugins: {
            tooltip: {
                callbacks: {
                    title: function () {
                        return `${"Air Pollution Data:"}`;
                    },
                    label: function (context) {
                        return `${context.label}: ${context.parsed.y} μg/m³`;
                    },
                },
            },
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
                    return `${value} μg/m³`;
                },
            },
        },
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
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 5,
                left: 15,
                right: 15,
                bottom: 15,
            },
        },
    };
}

export const airPollutionlinearChartOptions = {
    layout: {
        padding: {
            top: 15,
        },
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `${context.dataset.label}: ${context.parsed.y} μg/m³`;
                },
            },
        },
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
                    weight: "bold",
                },
            },
        },
    },
    responsive: false,
    maintainAspectRatio: false,
};

export function getLongTermWeatherLinearChartOptions(
    selectedDataset,
    selectedDateRange,
    city
) {
    return {
        tension: 0.4,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return `${value}${
                            selectedDataset.unit === "°C"
                                ? selectedDataset.unit
                                : " " + selectedDataset.unit
                        }`;
                    },
                    color: "#ffffff",
                },
                beginAtZero: true,
            },
            x: {
                type: "time",
                time: {
                    unit: "month",
                    tooltipFormat: "MMMM d, yyyy",
                },
                beginAtZero: true,
                ticks: {
                    color: "#ffffff",
                },
                min: selectedDateRange[0],
                max: selectedDateRange[1],
            },
        },
        plugins: {
            title: {
                display: true,
                text: `${selectedDataset.label} in ${city}`,
                font: {
                    size: 20,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.y}${
                            selectedDataset.unit === "°C"
                                ? selectedDataset.unit
                                : " " + selectedDataset.unit
                        }`;
                    },
                },
            },
            legend: {
                display: false,
            },
            currentTimePosition: {
                lineThickness: 1,
                color: "#ffffff",
            },
        },
    };
}
