import { createBrowserRouter } from "react-router-dom";
import LayoutComponent from "../components/LayoutComponent";
import { appRoutes } from "./appRoutes";

export const router = createBrowserRouter([
    {
        path: "",
        element: <LayoutComponent />,
        children: appRoutes,
    },
]);
