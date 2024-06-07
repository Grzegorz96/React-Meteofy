import { createSlice } from "@reduxjs/toolkit";

/**
 * Retrieves the initial theme mode based on the user's preference or the stored value in localStorage.
 * If no preference is found in localStorage, it checks the user's system preference for dark mode.
 * @returns {boolean} The initial theme mode (true for dark mode, false for light mode).
 */
const getInitialThemeMode = () => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");

    if (storedIsDarkMode === null) {
        const preference = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        localStorage.setItem("isDarkMode", preference);
        return preference;
    }

    return JSON.parse(storedIsDarkMode);
};

const initialState = {
    isDarkMode: getInitialThemeMode(),
};

/**
 * Represents a slice of theme data.
 *
 * @typedef {Object} ThemeDataSlice
 * @property {string} name - The name of the theme data slice.
 * @property {Object} initialState - The initial state of the theme data slice.
 * @property {Object} reducers - The reducers for the theme data slice.
 * @property {Function} reducers.toggleThemeMode - A reducer function that toggles the theme mode.
 */
const themeDataSlice = createSlice({
    name: "themeData",
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            localStorage.setItem("isDarkMode", !state.isDarkMode);
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleThemeMode } = themeDataSlice.actions;
export default themeDataSlice.reducer;
