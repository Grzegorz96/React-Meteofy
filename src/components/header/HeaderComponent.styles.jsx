import styled from "styled-components";
import logo from "../../assets/images/logo-weather.png";

// Function to generate styles for navigation links based on the isActive prop.
export const navLinkStyles = ({ isActive }) => {
    return {
        color: isActive ? "#49ebd5" : "#ffffff",
    };
};

export const Header = styled.header`
    background-color: #66666684;
    width: 100%;
    height: 70px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: "Logo Weather",
})`
    height: 100%;
`;

export const Navbar = styled.nav`
    display: flex;
    height: 100%;
    max-width: 1000px;
    width: 100%;

    a {
        text-decoration: none;
        width: 100%;
        max-width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        position: relative;
        background-color: rgba(153, 125, 251, 255);
        font-weight: bold;
        white-space: nowrap;
        padding: 5px;
        transition: 0.3s linear;

        &:hover {
            background-color: rgba(152, 125, 251, 0.541);
        }

        svg {
            font-size: 1.3rem;
        }

        &.active::before {
            content: "";
            height: 5px;
            width: 100%;
            background-color: #49ebd5;
            position: absolute;
            bottom: 0;
        }

        @media screen and (max-width: 1000px) {
            font-size: 0.9rem;
        }
    }
`;

export const SearchWrapper = styled.div`
    max-width: 330px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchEngine = styled.input.attrs({
    type: "text",
    placeholder: "Wpisz miasto",
    name: "search",
})`
    width: 100%;
    max-width: 300px;
    height: 30px;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: none;
    padding: 5px;
`;

export const SearchButton = styled.button.attrs({
    type: "button",
})`
    background-color: #49ebd5;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: ${(props) => props.theme.dark.text};
    padding: 5px;
    font-size: 1rem;
    cursor: pointer;
`;
