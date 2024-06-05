export function getAirPollutionBarChartOptions(city, theme) {
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
                backgroundColor: theme.tooltip,
                titleColor: theme.primary,
                bodyColor: theme.primary,
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
                color: theme.textPrimary,
            },
            datalabels: {
                anchor: "end",
                align: "top",
                clamp: true,
                font: {
                    weight: "bold",
                    size: 12,
                },
                color: theme.textSecondary,
                offset: 0,
                formatter: function (value) {
                    return value === null || value === undefined
                        ? "NA"
                        : `${value} μg/m³`;
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: theme.textSecondary,
                },
            },
            x: {
                ticks: {
                    color: theme.textSecondary,
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

export const getAirPollutionlinearChartOptions = (theme) => {
    return {
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
                backgroundColor: theme.tooltip,
                titleColor: theme.primary,
                bodyColor: theme.primary,
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
                offset: -3,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: theme.textSecondary,
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 10,
                        weight: "bold",
                    },
                    color: theme.textSecondary,
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };
};

export function getLongTermWeatherLinearChartOptions(
    selectedDataset,
    selectedDateRange,
    city,
    theme
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
                    color: theme.textSecondary,
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
                    color: theme.textSecondary,
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
                color: theme.textPrimary,
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
                backgroundColor: theme.tooltip,
                titleColor: theme.primary,
                bodyColor: theme.primary,
            },
            legend: {
                display: false,
            },
            currentTimePosition: {
                lineThickness: 1,
                color: theme.textPrimary,
            },
        },
    };
}
