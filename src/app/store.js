import { configureStore } from "@reduxjs/toolkit";
import cityDataReducer from "../state/cityDataSlice";
import themeDataReducer from "../state/themeDataSlice";

/**
 * The Redux store for managing the application state.
 */
const store = configureStore({
    reducer: {
        cityData: cityDataReducer,
        themeData: themeDataReducer,
    },
});

export default store;
