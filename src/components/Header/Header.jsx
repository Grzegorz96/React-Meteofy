import React from "react";
import { Header, Logo, Navbar, navLinkStyles } from "./Header.styles";
import SearchEngine from "../ui/SearchEngine/SearchEngine";
import { Link, NavLink } from "react-router-dom";
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
import { globalInputStyle } from "../ui/SearchEngine/SearchEngine.styles";

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
            <SearchEngine
                placeholder={"Search for a city"}
                city={cityData}
                handleOnChange={handleOnChange}
                style={globalInputStyle}
            />
            <Navbar>
                <NavLink to="/poland" style={navLinkStyles}>
                    <GiPoland />
                    Poland
                </NavLink>
                <NavLink to="/europe" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faEarthEurope} />
                    Europe
                </NavLink>
                <NavLink to="/world" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faGlobe} />
                    World
                </NavLink>
                <NavLink to="/long-term-forecast" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    Long term forecast
                </NavLink>
                <NavLink to="/air-pollution" style={navLinkStyles}>
                    <FontAwesomeIcon icon={faListCheck} />
                    Air pollution
                </NavLink>
            </Navbar>
        </Header>
    );
}
