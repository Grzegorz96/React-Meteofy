import styled from "styled-components";

export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.footer};
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.25s ease-in-out;
`;

export const PageName = styled.img.attrs({
    src: "/src/assets/images/page-name.png",
    alt: "Page Name Meteofy",
})`
    height: 100%;
    width: auto;
`;
