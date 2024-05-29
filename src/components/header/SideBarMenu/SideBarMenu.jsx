import { useState } from "react";
import { useSelector } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import { sideBarStyles } from "./SideBarMenu.styles";
import Navbar from "../Navbar/Navbar";
import "../../../assets/CSS/reactBurgerMenuStyles/buttonsPseudoclases.css";

export default function SideBarMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const isDarkMode = useSelector(({ themeData }) => themeData.isDarkMode);

    return (
        <>
            <Menu
                right
                isOpen={isOpen}
                onStateChange={(state) => setIsOpen(state.isOpen)}
                styles={sideBarStyles(isDarkMode)}
                burgerButtonClassName={
                    isDarkMode ? "burger-button-dark" : "burger-button-light"
                }
                crossButtonClassName={
                    isDarkMode ? "cross-button-dark" : "cross-button-light"
                }
            >
                <Navbar isMobile={true} setIsOpen={setIsOpen} />
            </Menu>
        </>
    );
}
