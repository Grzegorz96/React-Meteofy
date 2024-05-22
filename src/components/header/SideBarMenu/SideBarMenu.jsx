import { slide as Menu } from "react-burger-menu";
import { sideBarStyles } from "./SideBarMenu.styles";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "../../../assets/CSS/reactBurgerMenuStyles/buttonsPseudoclases.css";

export default function SideBarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Menu
                right
                isOpen={isOpen}
                onStateChange={(state) => setIsOpen(state.isOpen)}
                styles={sideBarStyles}
                burgerButtonClassName="burger-button"
                crossButtonClassName="cross-button"
            >
                <Navbar isMobile={true} setIsOpen={setIsOpen} />
            </Menu>
        </>
    );
}
