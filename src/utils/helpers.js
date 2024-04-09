import { aqiUSData } from "./constants/aqiUSData";
import { WEEK_DAYS } from "./constants/weekDays";

export function getAqiUSData(aqiValue) {
    if (aqiValue === null || isNaN(aqiValue)) {
        return null;
    }

    const lastIndex = aqiUSData.length - 1; // Indeks ostatniego elementu w aqiUSData

    // Sprawdź, czy wartość aqius jest większa niż minimalna wartość ostatniego elementu
    if (aqiValue >= aqiUSData[lastIndex].aqiUSLevel[0]) {
        return aqiUSData[lastIndex]; // Zwróć ostatni element, jeśli wartość aqius jest większa
    }

    return aqiUSData.find((data) => {
        return aqiValue >= data.aqiUSLevel[0] && aqiValue <= data.aqiUSLevel[1];
    });
}

export const getForecastDays = () => {
    const dayInAWeek = new Date().getDay();

    return WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );
};
