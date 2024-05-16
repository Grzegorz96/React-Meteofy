import { Header, Logo } from "./Header.styles";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import SearchEngine from "../../ui/SearchEngine/SearchEngine";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCityData } from "../../../state/cityDataSlice";
import { useNavigate } from "react-router-dom";
import { globalInputStyles } from "../../ui/SearchEngine/SearchEngine.styles";
import { useMediaQuery } from "react-responsive";

export default function HeaderComponent() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
            {isMobile ? <SideBarMenu /> : <Navbar />}
        </Header>
    );
}
