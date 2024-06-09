import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/header/Header/Header";
import MainComponent from "../components/Main/Main";
import FooterComponent from "../components/footer/Footer/Footer";

/**
 * @component
 * Main layout component for the application.
 *
 * This component serves as the main layout structure, containing a header,
 * a main section where nested routes will be rendered, and a footer.
 *
 * @returns {JSX.Element} The rendered main layout component.
 */
export default function MainLayout() {
    return (
        <>
            <HeaderComponent />
            <MainComponent>
                <Outlet />
            </MainComponent>
            <FooterComponent />
        </>
    );
}
