import styled from "styled-components";

/**
 * @component
 * Styled component for the footer.
 *
 * @prop {Object} theme - The theme object containing color configurations.
 */
export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.footer};
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.25s ease-in-out;
`;

/**
 * @component
 * Styled component for the page name logo of Meteofy.
 */
export const PageName = styled.img.attrs({
    src: "/src/assets/images/page-name.png",
    alt: "Page Name Meteofy",
})`
    height: 100%;
    width: auto;
`;
