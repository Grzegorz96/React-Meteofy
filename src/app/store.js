import { configureStore } from "@reduxjs/toolkit";
import cityDataReducer from "../state/cityDataSlice";
import themeDataReducer from "../state/themeDataSlice";

const store = configureStore({
    reducer: {
        cityData: cityDataReducer,
        themeData: themeDataReducer,
    },
});

export default store;
