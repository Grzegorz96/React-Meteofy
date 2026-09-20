import {
  HomePage,
  PolandPage,
  EuropePage,
  WorldPage,
  NotFoundPage,
  AirPollutionPage,
  LongTermWeatherPage,
} from '../pages';
import { ROUTES, PAGE_TITLES } from '../utils/constants';

/**
 * Array of routes for the application.
 * Each route object contains a path and an element component.
 *
 * @type {Array<{ path: string, element: JSX.Element }>}
 */
export const appRoutes = [
  {
    path: ROUTES.home,
    element: <HomePage />,
    handle: { title: PAGE_TITLES.home },
  },
  {
    path: ROUTES.poland,
    element: <PolandPage />,
    handle: { title: PAGE_TITLES.poland },
  },
  {
    path: ROUTES.europe,
    element: <EuropePage />,
    handle: { title: PAGE_TITLES.europe },
  },
  {
    path: ROUTES.world,
    element: <WorldPage />,
    handle: { title: PAGE_TITLES.world },
  },
  {
    path: ROUTES.longTermWeather,
    element: <LongTermWeatherPage />,
    handle: { title: PAGE_TITLES.longTermWeather },
  },
  {
    path: ROUTES.airPollution,
    element: <AirPollutionPage />,
    handle: { title: PAGE_TITLES.airPollution },
  },
  {
    path: ROUTES.notFound,
    element: <NotFoundPage />,
    handle: { title: PAGE_TITLES.notFound },
  },
];
