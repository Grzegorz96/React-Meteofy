import HomePage from "../pages/HomePage";
import PolandPage from "../pages/PolandPage";
import EuropePage from "../pages/EuropePage";
import WorldPage from "../pages/WorldPage";
import NotFoundPage from "../pages/NotFoundPage";
import AirPollutionPage from "../pages/AirPollutionPage";
import LongTermWeatherPage from "../pages/LongTermWeatherPage";

export const appRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/poland", element: <PolandPage /> },
    { path: "/europe", element: <EuropePage /> },
    { path: "/world", element: <WorldPage /> },
    { path: "/long-term-forecast", element: <LongTermWeatherPage /> },
    { path: "/air-pollution", element: <AirPollutionPage /> },
    { path: "*", element: <NotFoundPage /> },
];
