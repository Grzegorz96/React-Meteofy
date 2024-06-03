import { aqiUSData } from "./constants/aqiUSData";
import { startOfDay, addDays } from "date-fns";

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

export const getDefaultDateRange = () => {
    return [startOfDay(new Date()), startOfDay(addDays(new Date(), 44))];
};

export const requestCityDelay = {
    lastRequestTime: 0,
    minRequestInterval: 1300,
};
