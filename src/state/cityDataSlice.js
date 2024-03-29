import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    label: null,
    value: {
        latitude: null,
        longitude: null,
    },
};

const cityDataSlice = createSlice({
    name: "cityData",
    initialState,
    reducers: {
        setCityData: (state, action) => {
            state.label = action.payload.label;
            state.value.latitude = action.payload.value.latitude;
            state.value.longitude = action.payload.value.longitude;
        },
        resetCityData: () => initialState,
    },
});

export const { setCityData, resetCityData } = cityDataSlice.actions;
export default cityDataSlice.reducer;
