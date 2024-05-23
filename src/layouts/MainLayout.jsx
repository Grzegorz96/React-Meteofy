import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/header/Header/Header";
import MainComponent from "../components/Main/Main";
import FooterComponent from "../components/footer/Footer/Footer";
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
