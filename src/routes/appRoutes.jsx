import HomePage from '../pages/Home';
import PolandPage from '../pages/Poland';
import EuropePage from '../pages/Europe';
import WorldPage from '../pages/World';
import NotFoundPage from '../pages/NotFound';
import AirPollutionPage from '../pages/AirPollution';
import LongTermWeatherPage from '../pages/LongTermWeather';

/**
 * Array of routes for the application.
 * Each route object contains a path and an element component.
 *
 * @type {Array<{ path: string, element: JSX.Element }>}
 */
export const appRoutes = [
  { path: '/', element: <HomePage />, handle: { title: 'Home' } },
  { path: '/poland', element: <PolandPage />, handle: { title: 'Poland' } },
  { path: '/europe', element: <EuropePage />, handle: { title: 'Europe' } },
  { path: '/world', element: <WorldPage />, handle: { title: 'World' } },
  {
    path: '/long-term-weather',
    element: <LongTermWeatherPage />,
    handle: { title: 'Long Term Weather' },
  },
  {
    path: '/air-pollution',
    element: <AirPollutionPage />,
    handle: { title: 'Air Pollution' },
  },
  { path: '*', element: <NotFoundPage />, handle: { title: 'Not Found' } },
];
