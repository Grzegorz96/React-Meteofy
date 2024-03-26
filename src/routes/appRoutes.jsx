import HomePage from "../pages/HomePage";
import PolandPage from "../pages/PolandPage";
import EuropePage from "../pages/EuropePage";
import WorldPage from "../pages/WorldPage";
import NotFoundPage from "../pages/NotFoundPage";
import AirQualityPage from "../pages/AirQualityPage";
import LongTermWeatherPage from "../pages/LongTermWeatherPage";

export const appRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/polska", element: <PolandPage /> },
    { path: "/europa", element: <EuropePage /> },
    { path: "/świat", element: <WorldPage /> },
    { path: "*", element: <NotFoundPage /> },
    { path: "/pogoda-45-dniowa", element: <LongTermWeatherPage /> },
    { path: "/jakość-powietrza", element: <AirQualityPage /> },
];
