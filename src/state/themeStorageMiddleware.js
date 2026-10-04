import { THEME_DATA_KEY, toggleThemeMode } from './themeDataSlice';

/**
 * Saves the theme after `toggleThemeMode` updates the store.
 * The reducer only flips `isDarkMode`.
 *
 * @param {Object} store - The Redux store.
 * @returns {Function} The middleware.
 */
export const themeStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (toggleThemeMode.match(action)) {
    localStorage.setItem(THEME_DATA_KEY, store.getState().themeData.isDarkMode);
  }

  return result;
};
