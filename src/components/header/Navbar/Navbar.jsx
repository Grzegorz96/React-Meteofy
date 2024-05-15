import { NavLink } from "react-router-dom";
import { Navigate } from "./Navbar.styles";
import { GiPoland } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faEarthEurope,
    faCalendarDays,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { navLinkStyles } from "../../../utils/styles/navLinkStyles";

export default function Navbar() {
    return (
        <Navigate>
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
            <NavLink to="/long-term-weather" style={navLinkStyles}>
                <FontAwesomeIcon icon={faCalendarDays} />
                Long term weather
            </NavLink>
            <NavLink to="/air-pollution" style={navLinkStyles}>
                <FontAwesomeIcon icon={faListCheck} />
                Air pollution
            </NavLink>
        </Navigate>
    );
}
