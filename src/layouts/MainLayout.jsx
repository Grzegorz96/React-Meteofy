import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header/Header";
import MainComponent from "../components/Main/Main";
import FooterComponent from "../components/Footer/Footer";
import React from "react";

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
