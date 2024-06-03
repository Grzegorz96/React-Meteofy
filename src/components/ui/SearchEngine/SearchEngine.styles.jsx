export const globalInputStyles = (theme) => ({
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
        backgroundColor: theme.secondary,
        boxShadow: state.isFocused
            ? `0 0 0 2px ${theme.textSecondary}`
            : "none",
        border: "none",
        height: "40px",
        width: "100%",
        cursor: "pointer",
        color: theme.textPrimary,
        transition:
            "box-shadow 0.25s ease-in-out, background-color 0.25s ease-in-out",
    }),
    input: (styles) => ({
        ...styles,
        color: theme.textPrimary,
        transition: "color 0.25s ease-in-out",
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
    placeholder: (styles) => ({
        ...styles,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        color: theme.textSecondary,
        transition: "color 0.25s ease-in-out",
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
    singleValue: (styles) => ({
        ...styles,
        color: theme.textPrimary,
        transition: "color 0.25s ease-in-out",
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
    menu: (styles) => ({
        ...styles,
        zIndex: "3",
        backgroundColor: theme.secondary,
        color: theme.textPrimary,
        overflow: "hidden",
        border: `1px solid ${theme.textSecondary}`,
        transition:
            "background-color 0.25s ease-in-out, border 0.25s ease-in-out, color 0.25s ease-in-out",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",
        color: state.isSelected ? theme.textPrimary : styles.color,
        backgroundColor:
            state.isFocused || state.isSelected
                ? theme.textSecondary
                : styles.backgroundColor,

        ":active": {
            backgroundColor: theme.textSecondary,
        },

        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
});

export const localInputStyles = (theme) => ({
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
        backgroundColor: theme.secondary,
        width: "90%",
        height: "40px",
        borderRadius: "0",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        cursor: "pointer",
        boxShadow: `0px ${
            state.isFocused ? "1.5px 1px 1.5px" : "1px 1px 1px"
        } ${theme.textSecondary}`,
        border: "none",
        transition:
            "box-shadow 0.25s ease-in-out, background-color 0.25s ease-in-out",
    }),
    input: (styles) => ({
        ...styles,
        color: theme.textPrimary,
        transition: "color 0.25s ease-in-out",
    }),
    placeholder: (styles) => ({
        ...styles,
        color: theme.textSecondary,
        transition: "color 0.25s ease-in-out",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    }),
    singleValue: (styles) => ({
        ...styles,
        color: theme.textPrimary,
        transition: "color 0.25s ease-in-out",
    }),
    menu: (styles) => ({
        ...styles,
        width: "90%",
        overflow: "hidden",
        backgroundColor: theme.secondary,
        color: theme.textPrimary,
        border: `1px solid ${theme.textSecondary}`,
        transition:
            "background-color 0.25s ease-in-out, border 0.25s ease-in-out, color 0.25s ease-in-out",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",
        color: state.isSelected ? theme.textPrimary : styles.color,
        backgroundColor:
            state.isFocused || state.isSelected
                ? theme.textSecondary
                : styles.backgroundColor,

        ":active": {
            backgroundColor: theme.textSecondary,
        },
    }),
});
