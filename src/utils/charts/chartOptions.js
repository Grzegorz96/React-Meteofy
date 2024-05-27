import { darkTheme, lightTheme } from "../styles/theme";

export function getAirPollutionBarChartOptions(city, isDarkMode) {
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
                backgroundColor: isDarkMode
                    ? darkTheme.tooltip
                    : lightTheme.tooltip,
                titleColor: isDarkMode ? darkTheme.primary : lightTheme.primary,
                bodyColor: isDarkMode ? darkTheme.primary : lightTheme.primary,
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
                color: isDarkMode
                    ? darkTheme.textPrimary
                    : lightTheme.textPrimary,
            },
            datalabels: {
                anchor: "end",
                align: "top",
                clamp: true,
                font: {
                    weight: "bold",
                    size: 12,
                },
                color: isDarkMode
                    ? darkTheme.textSecondary
                    : lightTheme.textSecondary,
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
                    color: isDarkMode
                        ? darkTheme.textSecondary
                        : lightTheme.textSecondary,
                },
            },
            x: {
                ticks: {
                    color: isDarkMode
                        ? darkTheme.textSecondary
                        : lightTheme.textSecondary,
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

export const getAirPollutionlinearChartOptions = (isDarkMode) => {
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
                backgroundColor: isDarkMode
                    ? darkTheme.tooltip
                    : lightTheme.tooltip,
                titleColor: isDarkMode ? darkTheme.primary : lightTheme.primary,
                bodyColor: isDarkMode ? darkTheme.primary : lightTheme.primary,
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
        responsive: true,
        maintainAspectRatio: false,
    };
};

export function getLongTermWeatherLinearChartOptions(
    selectedDataset,
    selectedDateRange,
    city,
    isDarkMode
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
                    color: isDarkMode
                        ? darkTheme.textSecondary
                        : lightTheme.textSecondary,
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
                    color: isDarkMode
                        ? darkTheme.textSecondary
                        : lightTheme.textSecondary,
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
                color: isDarkMode
                    ? darkTheme.textPrimary
                    : lightTheme.textPrimary,
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
                backgroundColor: isDarkMode
                    ? darkTheme.tooltip
                    : lightTheme.tooltip,
                titleColor: isDarkMode ? darkTheme.primary : lightTheme.primary,
                bodyColor: isDarkMode ? darkTheme.primary : lightTheme.primary,
            },
            legend: {
                display: false,
            },
            currentTimePosition: {
                lineThickness: 1,
                color: isDarkMode
                    ? darkTheme.textPrimary
                    : lightTheme.textPrimary,
            },
        },
    };
}
