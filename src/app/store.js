import { configureStore } from "@reduxjs/toolkit";
import cityDataReducer from "../state/cityDataSlice";

const store = configureStore({
    reducer: {
        cityData: cityDataReducer,
    },
});

export default store;
