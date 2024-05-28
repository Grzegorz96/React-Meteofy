import { darkTheme, lightTheme } from "../../../utils/styles/theme";

export const globalInputStyles = (isDarkMode) => ({
    container: (styles) => ({
        ...styles,
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexShrink: "2",
        minWidth: "146px",
        maxWidth: "400px",
        border: "none",
    }),
    control: (styles, state) => ({
        ...styles,
        backgroundColor: isDarkMode
            ? darkTheme.secondary
            : lightTheme.secondary,
        boxShadow: state.isFocused
            ? `0 0 0 2px ${
                  isDarkMode
                      ? darkTheme.textSecondary
                      : lightTheme.textSecondary
              }`
            : "none",
        border: "none",
        height: "40px",
        width: "100%",
        cursor: "pointer",
        transition:
            "box-shadow 0.25s ease-in-out, background-color 0.25s ease-in-out",
    }),
    placeholder: (styles) => ({
        ...styles,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        color: isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary,
        transition: "color 0.25s ease-in-out",
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
    menu: (styles) => ({
        ...styles,
        zIndex: "3",
        backgroundColor: isDarkMode
            ? darkTheme.secondary
            : lightTheme.secondary,
        color: isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary,
        overflow: "hidden",
        border: `1px solid ${
            isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary
        }`,
        transition:
            "background-color 0.25s ease-in-out, border 0.25s ease-in-out, color 0.25s ease-in-out",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",
        color: state.isSelected
            ? isDarkMode
                ? lightTheme.textPrimary
                : darkTheme.textPrimary
            : "none",
        backgroundColor:
            state.isFocused || state.isSelected
                ? isDarkMode
                    ? darkTheme.textSecondary
                    : lightTheme.textSecondary
                : styles.backgroundColor,

        ":active": {
            backgroundColor: isDarkMode
                ? darkTheme.textSecondary
                : lightTheme.textSecondary,
        },

        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
    singleValue: (styles) => ({
        ...styles,
        color: isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary,
        transition: "color 0.25s ease-in-out",
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
});

export const localInputStyles = (isDarkMode) => ({
    container: (styles) => ({
        ...styles,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "400px",
        position: "fixed",
        top: "70px",
        zIndex: "2",
    }),
    control: (styles, state) => ({
        ...styles,
        backgroundColor: isDarkMode
            ? darkTheme.secondary
            : lightTheme.secondary,
        width: "90%",
        height: "40px",
        borderRadius: "0",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        cursor: "pointer",
        boxShadow: `0px ${
            state.isFocused ? "1.5px 1px 1.5px" : "1px 1px 1px"
        } ${isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary}`,
        border: "none",
        transition:
            "box-shadow 0.25s ease-in-out, background-color 0.25s ease-in-out",
    }),
    placeholder: (styles) => ({
        ...styles,
        color: isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary,
        transition: "color 0.25s ease-in-out",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    }),
    menu: (styles) => ({
        ...styles,
        width: "90%",
        overflow: "hidden",
        backgroundColor: isDarkMode
            ? darkTheme.secondary
            : lightTheme.secondary,
        color: isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary,
        border: `1px solid ${
            isDarkMode ? darkTheme.textSecondary : lightTheme.textSecondary
        }`,
        transition:
            "background-color 0.25s ease-in-out, border 0.25s ease-in-out, color 0.25s ease-in-out",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",
        color: state.isSelected
            ? isDarkMode
                ? lightTheme.textPrimary
                : darkTheme.textPrimary
            : "none",
        backgroundColor:
            state.isFocused || state.isSelected
                ? isDarkMode
                    ? darkTheme.textSecondary
                    : lightTheme.textSecondary
                : styles.backgroundColor,

        ":active": {
            backgroundColor: isDarkMode
                ? darkTheme.textSecondary
                : lightTheme.textSecondary,
        },
    }),

    singleValue: (styles) => ({
        ...styles,
        color: isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary,
        transition: "color 0.25s ease-in-out",
    }),
});
