import {
    FaThermometerEmpty,
    FaThermometerQuarter,
    FaThermometerHalf,
    FaThermometerThreeQuarters,
    FaThermometerFull,
} from "react-icons/fa";

export const aqiUSData = [
    {
        aqiColor: "#00e400",
        aqiUSLevel: [0, 50],
        thermometerIcon: FaThermometerEmpty,
        faceIcon: "ic-face-green",
        levelsOfConcern: "Good",
        aqiDescription:
            "Air quality is satisfactory, and air pollution poses little or no risk.",
    },
    {
        aqiColor: "#ff0",
        aqiUSLevel: [51, 100],
        thermometerIcon: FaThermometerQuarter,
        faceIcon: "ic-face-yellow",
        levelsOfConcern: "Moderate",
        aqiDescription:
            "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.",
    },
    {
        aqiColor: "#ff7e00",
        aqiUSLevel: [101, 150],
        thermometerIcon: FaThermometerHalf,
        faceIcon: "ic-face-orange",
        levelsOfConcern: "Unhealthy for Sensitive Groups",
        aqiDescription:
            "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
    },
    {
        aqiColor: "#f00",
        aqiUSLevel: [151, 200],
        thermometerIcon: FaThermometerThreeQuarters,
        faceIcon: "ic-face-red",
        levelsOfConcern: "Unhealthy",
        aqiDescription:
            "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
    },
    {
        aqiColor: "#7414af",
        aqiUSLevel: [201, 300],
        thermometerIcon: FaThermometerFull,
        faceIcon: "ic-face-purple",
        levelsOfConcern: "Very Unhealthy",
        aqiDescription:
            "Health alert: everyone may experience more serious health effects.",
    },
    {
        aqiColor: "#6e0020",
        aqiUSLevel: [301],
        thermometerIcon: FaThermometerFull,
        faceIcon: "ic-face-maroon",
        levelsOfConcern: "Hazardous",
        aqiDescription:
            "Health warnings of emergency conditions. The entire population is more likely to be affected.",
    },
];
