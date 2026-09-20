import { configureStore } from '@reduxjs/toolkit';
import { cityDataReducer, themeDataReducer } from '../state';

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
