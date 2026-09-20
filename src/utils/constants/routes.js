/**
 * Application route paths.
 * @typedef {Object} Routes
 * @property {string} home - Home page path.
 * @property {string} poland - Poland map page path.
 * @property {string} europe - Europe map page path.
 * @property {string} world - World globe page path.
 * @property {string} longTermWeather - Long-term weather page path.
 * @property {string} airPollution - Air pollution page path.
 * @property {string} notFound - Catch-all path for unknown routes.
 */

/**
 * Application route paths.
 * @type {Routes}
 */
export const ROUTES = {
  home: '/',
  poland: '/poland',
  europe: '/europe',
  world: '/world',
  longTermWeather: '/long-term-weather',
  airPollution: '/air-pollution',
  notFound: '*',
};
