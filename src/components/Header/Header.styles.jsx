import styled from "styled-components";

// Function to generate styles for navigation links based on the isActive prop.
export const navLinkStyles = ({ isActive }) => {
    return {
        color: isActive ? "#49ebd5" : "#ffffff",
    };
};

export const Header = styled.header`
    position: fixed;
    top: 0;
    background-color: #66666684;
    width: 100%;
    height: 70px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;

export const Logo = styled.img.attrs({
    src: "/assets/images/logo-weather.png",
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
