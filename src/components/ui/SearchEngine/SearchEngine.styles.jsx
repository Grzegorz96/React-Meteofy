import { transform } from "lodash";

export const localInputStyles = {
    container: (styles) => ({
        ...styles,
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        position: "fixed",
        top: "70px",
        zIndex: "1",
    }),
    control: (styles) => ({
        ...styles,
        width: "100%",
        height: "40px",
        borderRadius: "0",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        marginInline: "20px",
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
    option: (styles, { isFocused }) => ({
        ...styles,
    }),
};

export const globalInputStyles = {
    container: (styles) => ({
        ...styles,
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexShrink: "2",
        minWidth: "140px",
    }),
    control: (styles) => ({
        ...styles,
        height: "40px",
        width: "100%",
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
        top: "15px",
        // borderRadius: "5px",
        // border: "none",
        // boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
        // width: "100%",
    }),
    option: (styles, { isFocused }) => ({
        ...styles,
        // backgroundColor: isFocused ? "#49ebd5" : "#ffffff",
        // color: isFocused ? "#ffffff" : "#414141",
        // cursor: "pointer",
    }),
    singleValue: (styles) => ({
        ...styles,
        "@media (max-width: 450px)": {
            fontSize: "12px",
        },
    }),
};
