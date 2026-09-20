import {
  HomePage,
  PolandPage,
  EuropePage,
  WorldPage,
  NotFoundPage,
  AirPollutionPage,
  LongTermWeatherPage,
} from '../pages';
import { ROUTES } from '../utils/constants';

/**
 * Array of routes for the application.
 * Each route object contains a path and an element component.
 *
 * @type {Array<{ path: string, element: JSX.Element }>}
 */
export const appRoutes = [
  { path: ROUTES.home, element: <HomePage />, handle: { title: 'Home' } },
  {
    path: ROUTES.poland,
    element: <PolandPage />,
    handle: { title: 'Poland' },
  },
  {
    path: ROUTES.europe,
    element: <EuropePage />,
    handle: { title: 'Europe' },
  },
  { path: ROUTES.world, element: <WorldPage />, handle: { title: 'World' } },
  {
    path: ROUTES.longTermWeather,
    element: <LongTermWeatherPage />,
    handle: { title: 'Long Term Weather' },
  },
  {
    path: ROUTES.airPollution,
    element: <AirPollutionPage />,
    handle: { title: 'Air Pollution' },
  },
  {
    path: ROUTES.notFound,
    element: <NotFoundPage />,
    handle: { title: 'Not Found' },
  },
];
