import HomePage from "../pages/Home";
import PolandPage from "../pages/Poland";
import EuropePage from "../pages/Europe";
import WorldPage from "../pages/World";
import NotFoundPage from "../pages/NotFound";
import AirPollutionPage from "../pages/AirPollution";
import LongTermWeatherPage from "../pages/LongTermWeather";

/**
 * Array of routes for the application.
 * Each route object contains a path and an element component.
 *
 * @type {Array<{ path: string, element: JSX.Element }>}
 */
export const appRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/poland", element: <PolandPage /> },
    { path: "/europe", element: <EuropePage /> },
    { path: "/world", element: <WorldPage /> },
    { path: "/long-term-weather", element: <LongTermWeatherPage /> },
    { path: "/air-pollution", element: <AirPollutionPage /> },
    { path: "*", element: <NotFoundPage /> },
];
