import { WEEK_DAYS } from "../constants/weekDays";

export const getForecastDays = () => {
    const dayInAWeek = new Date().getDay();

    return WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );
};
