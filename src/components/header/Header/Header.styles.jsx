import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    background-color: ${(props) => props.theme.header};
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
    max-width: 220px;
    flex-shrink: 1;
    margin-left: 10px;

    &:focus-visible {
        outline: none;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

export const Logo = styled.img.attrs({
    src: "/src/assets/images/logo-meteofy.png",
    alt: "Logo Meteofy",
})`
    height: auto;
    width: 100%;
`;
