import styled from "styled-components";

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
    src: "/src/assets/images/logo-weather.png",
    alt: "Logo Weather",
})`
    height: 100%;
`;
