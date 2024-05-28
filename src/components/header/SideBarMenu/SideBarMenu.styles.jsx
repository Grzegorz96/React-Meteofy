import { darkTheme, lightTheme } from "../../../utils/styles/theme";

export const sideBarStyles = (isDarkMode) => ({
    bmBurgerButton: {
        position: "relative",
        width: "35px",
        height: "30px",
        marginRight: "10px",
    },
    bmBurgerBars: {
        backgroundColor: isDarkMode
            ? darkTheme.textPrimary
            : lightTheme.textPrimary,
        transition: "background-color 0.25s ease-in-out",
    },
    bmCrossButton: {
        top: "15px",
        right: "10px",
        height: "40px",
        width: "40px",
    },
    bmCross: {
        top: "-1px",
        right: "4.5px",
        backgroundColor: isDarkMode
            ? darkTheme.textPrimary
            : lightTheme.textPrimary,
        transition: "background-color 0.25s ease-in-out",
        height: "30px",
    },
    bmMenuWrap: {
        top: 0,
        position: "fixed",
        height: "100%",
    },
    bmMenu: {
        backgroundColor: isDarkMode
            ? darkTheme.secondary
            : lightTheme.secondary,
        transition: "background-color 0.25s ease-in-out",
        paddingTop: "70px",
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.4)",
        left: 0,
        top: 0,
        zIndex: 1070,
    },
});
