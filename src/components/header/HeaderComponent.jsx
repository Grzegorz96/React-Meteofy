import React from "react";
import { Header, Logo, Navbar } from "./HeaderComponent.styles";
import SearchComponent from "../searchEngine/SearchComponent";
import { Link, NavLink } from "react-router-dom";
import { navLinkStyles } from "./HeaderComponent.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faEarthEurope,
    faCalendarDays,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { GiPoland } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setCityData } from "../../state/cityDataSlice";
import { useNavigate } from "react-router-dom";
import { globalInputStyle } from "../searchEngine/SearchComponent.styles";

export default function HeaderComponent() {
    const cityData = useSelector(({ cityData }) => cityData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (searchedData) => {
        dispatch(setCityData(searchedData));
        navigate("/");
    };

    return (
        <Header>
            <Link to="/">
                <Logo />
            </Link>
            <SearchComponent
                placeholder={"Search for a city"}
                city={cityData}
                handleOnChange={handleOnChange}
                style={globalInputStyle}
            />
            <Navbar>
                <NavLink to="/poland" style={navLinkStyles}>
                    <GiPoland />
                    Polska
                </NavLink>
                <NavLink to="/europe" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faEarthEurope} />
                    Europa
                </NavLink>
                <NavLink to="/world" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faGlobe} />
                    Świat
                </NavLink>
                <NavLink to="/long-term-forecast" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    45 dni
                </NavLink>
                <NavLink to="/air-pollution" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faListCheck} />
                    Jakość powietrza
                </NavLink>
            </Navbar>
        </Header>
    );
}
