import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/styles/globalStyles.js";
import { theme } from "./utils/styles/theme.js";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
