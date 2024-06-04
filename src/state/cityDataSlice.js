import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const cityDataSlice = createSlice({
    name: "cityData",
    initialState,
    reducers: {
        setCityData: (state, { payload }) => payload,
        resetCityData: () => initialState,
    },
});

export const { setCityData, resetCityData } = cityDataSlice.actions;
export default cityDataSlice.reducer;
