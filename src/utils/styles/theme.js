const theme = {
    header: "rgba(102, 102, 102, 0.40)",
    footer: "rgba(102, 102, 102, 0.40)",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundFocus: "rgba(0, 0, 0, 0.3)",
    overlay: "rgba(0, 0, 0, 0.4) !important",
    textSecondary: "#818181",
};

export const darkTheme = {
    ...theme,
    primary: "#121212",
    secondary: "#1e1e1e",
    textPrimary: "#e3e3e3",
    navLink: "#bb86fc",
    navLinkHover: "rgba(187, 134, 252, 0.7);",
    shadow: "rgb(255 255 255 / 30%)",
    tooltip: "rgba(255, 255, 255, 0.75)",
};

export const lightTheme = {
    ...theme,
    primary: "#ffffff",
    secondary: "#f1f1f1",
    textPrimary: "#000000",
    navLink: "#6200ee",
    navLinkHover: "rgba(99, 0, 238, 0.7)",
    shadow: "rgb(0 0 0 / 30%)",
    tooltip: "rgba(0, 0, 0, 0.75)",
};
