import { createSlice } from "@reduxjs/toolkit";

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
