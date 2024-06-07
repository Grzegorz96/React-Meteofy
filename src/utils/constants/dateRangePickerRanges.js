import { startOfDay, addDays, subDays } from "date-fns";

/**
 * Returns an array of date ranges.
 * @param {boolean} moveRangesToBottom Indicates whether to move the ranges to the bottom or left.
 * @returns {Array} An array of date ranges.
 */
export const ranges = (moveRangesToBottom) => {
    return [
        {
            label: "last 7 Days",
            value: [startOfDay(subDays(new Date(), 6)), startOfDay(new Date())],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "last 30 Days",
            value: [
                startOfDay(subDays(new Date(), 29)),
                startOfDay(new Date()),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "last 90 Days",
            value: [
                startOfDay(subDays(new Date(), 89)),
                startOfDay(new Date()),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "next 7 Days",
            value: [startOfDay(new Date()), startOfDay(addDays(new Date(), 6))],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "next 30 Days",
            value: [
                startOfDay(new Date()),
                startOfDay(addDays(new Date(), 29)),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
        {
            label: "next 90 Days",
            value: [
                startOfDay(new Date()),
                startOfDay(addDays(new Date(), 89)),
            ],
            placement: moveRangesToBottom ? "bottom" : "left",
        },
    ];
};
