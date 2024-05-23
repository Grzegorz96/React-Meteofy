import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/styles/globalStyles.js";
import { darkTheme, lightTheme } from "./utils/styles/theme.js";

function App() {
    const [theme, setTheme] = useState("light");
    const isDarkTheme = theme === "dark";

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
