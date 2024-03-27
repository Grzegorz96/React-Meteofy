import { configureStore } from "@reduxjs/toolkit";
import cityCoordsReducer from "../state/cityCoordsSlice";

const store = configureStore({
    reducer: {
        cityCoords: cityCoordsReducer,
    },
});

export default store;
