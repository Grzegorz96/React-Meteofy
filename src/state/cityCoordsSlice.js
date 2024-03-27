import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latitude: null,
    longitude: null,
};

const cityCoordsSlice = createSlice({
    name: "cityCoords",
    initialState,
    reducers: {
        setCityCoords: (state, action) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
    },
});

export const { setCityCoords } = cityCoordsSlice.actions;
export default cityCoordsSlice.reducer;
