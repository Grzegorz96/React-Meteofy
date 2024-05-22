import { zhCN } from "date-fns/locale";

export const sideBarStyles = {
    bmBurgerButton: {
        position: "relative",
        width: "35px",
        height: "30px",
        marginRight: "10px",
    },
    bmBurgerBars: {
        background: "#373a47",
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
        background: "#bdc3c7",
        height: "30px",
    },
    bmMenuWrap: {
        top: 0,
        position: "fixed",
        height: "100%",
    },
    bmMenu: {
        background: "#373a47",
        paddingTop: "70px",
    },
    bmMorphShape: {
        fill: "#373a47",
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
        left: 0,
        top: 0,
        zIndex: 1070,
    },
};
