export const localInputStyles = {
    container: (styles) => ({
        ...styles,
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        position: "fixed",
        top: "70px",
        zIndex: "2",
    }),
    control: (styles) => ({
        ...styles,
        width: "100%",
        height: "40px",
        borderRadius: "0",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        marginInline: "20px",
        cursor: "pointer",
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "#666666",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    }),
    menu: (styles) => ({
        ...styles,
    }),
    option: (styles) => ({
        ...styles,
        cursor: "pointer",
    }),
};

export const globalInputStyles = {
    container: (styles) => ({
        ...styles,
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexShrink: "2",
        minWidth: "146px",
        maxWidth: "400px",
    }),
    control: (styles) => ({
        ...styles,
        height: "40px",
        width: "100%",
        cursor: "pointer",
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "#666666",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
    menu: (styles) => ({
        ...styles,
        top: "15px",
    }),
    option: (styles) => ({
        ...styles,
        cursor: "pointer",
    }),
    singleValue: (styles) => ({
        ...styles,
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
};
