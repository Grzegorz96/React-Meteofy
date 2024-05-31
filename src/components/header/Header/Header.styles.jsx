import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    background-color: ${({ theme }) => theme.header};
    width: 100%;
    height: 70px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    transition: background-color 0.25s ease-in-out;
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 220px;
    flex-shrink: 1;
    margin-left: 10px;
    transition: background-color 0.25s ease-in-out;
    border-radius: 6px;

    &:focus-visible {
        outline: none;
        background-color: ${({ theme }) => theme.backgroundFocus};
    }
`;

export const Logo = styled.img.attrs({
    src: "/src/assets/images/logo-meteofy.png",
    alt: "Logo Meteofy",
})`
    height: auto;
    width: 100%;
`;
