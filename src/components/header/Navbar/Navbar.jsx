import { NavLink } from "react-router-dom";
import { Navigate, navLinkStyles } from "./Navbar.styles";
import { GiPoland } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faEarthEurope,
    faCalendarDays,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";

/**
 * @component
 * Renders the navigation component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isMobile - Indicates if the device is mobile.
 * @param {function} props.setIsOpen - Callback function to set the open state of the side bar.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export default function Navbar({ isMobile, setIsOpen }) {
    return (
        <Navigate
            $isMobile={isMobile}
            onClick={isMobile ? () => setIsOpen(false) : null}
        >
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
