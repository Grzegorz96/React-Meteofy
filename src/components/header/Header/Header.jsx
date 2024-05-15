import { useState, useEffect } from "react";
import { Header, Logo } from "./Header.styles";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import SearchEngine from "../../ui/SearchEngine/SearchEngine";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCityData } from "../../../state/cityDataSlice";
import { useNavigate } from "react-router-dom";
import { globalInputStyles } from "../../ui/SearchEngine/SearchEngine.styles";
import { stack as Menu } from "react-burger-menu";
import "./styles.css";

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Event handler to close the menu if window width is greater than 768 pixels.
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                toggleMenu();
            }
        };

        // Add an event listener for the resize event.
        window.addEventListener("resize", handleResize);

        // Cleanup: remove the event listener when the component unmounts.
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]); // useEffect dependency array to watch changes in isOpen state.

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
                styles={globalInputStyles}
            />
            <Navbar />
            <Menu
                right
                isOpen={isOpen}
                onStateChange={(state) => setIsOpen(state.isOpen)}
            >
                <Navbar />
            </Menu>
        </Header>
    );
}
