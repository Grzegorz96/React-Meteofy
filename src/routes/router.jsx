import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { appRoutes } from "./appRoutes";

/**
 * Router configuration for the application.
 *
 * @param {Array} routes - An array of route objects.
 * @returns {Object} The created router object.
 */
export const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: appRoutes,
    },
]);
