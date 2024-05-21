import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

::-webkit-scrollbar {
      width: 12px;
  }

  ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
      background-color: #555;
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
