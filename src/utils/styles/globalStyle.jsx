import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

::-webkit-scrollbar {
    display: none;
}

body {
    background: ${(props) =>
        props.theme.dark.primary} url(/src/assets/images/theme.jpg) center/cover
        no-repeat;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily};
    -webkit-tap-highlight-color: transparent;
}`;
