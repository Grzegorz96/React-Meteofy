import React from "react";
import { SideBar, HamburgerBox } from "./SideBarMenu.styles";
import { slide as Menu } from "react-burger-menu";

export default function SideBarMenu() {
    return (
        <Menu>
            <a id="home" className="menu-item" href="/">
                Home
            </a>
            <a id="about" className="menu-item" href="/about">
                About
            </a>
            <a id="services" className="menu-item" href="/services">
                Services
            </a>
            <a id="contact" className="menu-item" href="/contact">
                Contact
            </a>
        </Menu>
    );
}
