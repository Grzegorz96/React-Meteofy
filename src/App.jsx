import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./utils/styles/globalStyle.js";
import { theme } from "./utils/styles/theme.js";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
