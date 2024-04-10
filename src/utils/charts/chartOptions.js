export function getBarChartOptions(city) {
    return {
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
    };
}

export const linearChartOptions = {
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
                    weight: "bold",
                },
            },
        },
    },
    responsive: false,
    maintainAspectRatio: false,
};
