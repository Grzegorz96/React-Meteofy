import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/styles/globalStyles.js";
import { darkTheme, lightTheme } from "./utils/styles/theme.js";
import { useSelector } from "react-redux";

function App() {
    const isDarkMode = useSelector(({ themeData }) => themeData.isDarkMode);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
