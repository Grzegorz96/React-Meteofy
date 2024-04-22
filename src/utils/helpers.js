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

// cityList to wszystkie miasta świata
// cityCapitals to stolice krajów
export const creatingCapitals = () => {
    function findCity(capital) {
        // Wyszukaj miasto dla danej stolicy
        const foundCity = cityList.find((city) => city.name === capital.city);
        // Jeśli znaleziono miasto, zwróć jego informacje
        if (foundCity) {
            return {
                id: foundCity.id,
                name: foundCity.name,
                coord: foundCity.coord,
            };
        }
        // Jeśli miasto nie zostało znalezione, zwróć pusty obiekt
        return {};
    }

    // Funkcja zwracająca informacje o miastach dla każdej stolicy
    function getCitiesForCapitals(cityCapitals) {
        const citiesForCapitals = [];
        // Przejdź przez listę stolic
        for (const capital of cityCapitals) {
            // Wyszukaj miasto dla danej stolicy
            const cityInfo = findCity(capital);
            // Jeśli znaleziono miasto, dodaj jego informacje do listy
            if (cityInfo.id) {
                citiesForCapitals.push(cityInfo);
            }
        }
        return citiesForCapitals;
    }

    return getCitiesForCapitals(cityCapitals);
};
