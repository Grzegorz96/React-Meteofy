import { useState } from "react";
import { Overlay, Popup, PopupText, PopupButton } from "./Popup.styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useSpring } from "@react-spring/web";

export default function PopupComponent({ data, setData }) {
    const [isOpen, setIsOpen] = useState(true);

    const fadeInFromTopAnimation = useSpring({
        from: {
            opacity: isOpen ? 0 : 1,
            transform: isOpen
                ? "translate(-50%, -200%)"
                : "translate(-50%, -50%)",
        },
        to: {
            opacity: isOpen ? 1 : 0,
            transform: isOpen
                ? "translate(-50%, -50%)"
                : "translate(-50%, -200%)",
        },
        config: {
            duration: 700,
            easing: (t) => t * (2 - t),
        },
        onRest: () => {
            if (!isOpen) {
                setData({ ...data, error: null });
            }
        },
    });

    return (
        <Overlay onClick={() => setIsOpen(false)}>
            <Popup
                style={fadeInFromTopAnimation}
                onClick={(e) => e.stopPropagation()}
            >
                <FaRegCircleXmark />
                <h1>Error!</h1>
                <PopupText>{data.error}</PopupText>
                <PopupButton onClick={() => setIsOpen(false)}>OK</PopupButton>
            </Popup>
        </Overlay>
    );
}
