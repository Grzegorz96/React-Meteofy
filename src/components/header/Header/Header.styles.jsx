import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #66666684;
    width: 100%;
    height: 70px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 260px;
    flex-shrink: 1;
    margin-left: 10px;
`;

export const Logo = styled.img.attrs({
    src: "/src/assets/images/logo-weather.png",
    alt: "Logo Weather",
})`
    width: 100%;
`;
