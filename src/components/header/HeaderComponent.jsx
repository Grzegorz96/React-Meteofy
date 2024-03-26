import React from "react";
import {
    Header,
    Logo,
    Navbar,
    SearchEngine,
    SearchButton,
    SearchWrapper,
} from "./HeaderComponent.styles";
import { Link, NavLink } from "react-router-dom";
import { navLinkStyles } from "./HeaderComponent.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faGlobe,
    faEarthEurope,
    faCalendarDays,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { GiPoland } from "react-icons/gi";

export default function HeaderComponent() {
    return (
        <Header>
            <Link to="/">
                <Logo />
            </Link>
            <SearchWrapper>
                <SearchEngine />
                <SearchButton>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </SearchButton>
            </SearchWrapper>
            <Navbar>
                <NavLink to="/polska" style={navLinkStyles}>
                    <GiPoland />
                    Polska
                </NavLink>
                <NavLink to="/europa" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faEarthEurope} />
                    Europa
                </NavLink>
                <NavLink to="/świat" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faGlobe} />
                    Świat
                </NavLink>
                <NavLink to="/pogoda-45-dniowa" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    45 dni
                </NavLink>
                <NavLink to="/jakość-powietrza" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faListCheck} />
                    Jakość powietrza
                </NavLink>
            </Navbar>
        </Header>
    );
}
