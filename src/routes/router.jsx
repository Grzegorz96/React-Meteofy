import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { appRoutes } from "./appRoutes";

export const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: appRoutes,
        // errorElement: <div>ERROR</div>,
    },
]);
