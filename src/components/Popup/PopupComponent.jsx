import { useState } from "react";
import { Popup, PopupText, PopupButton } from "./PopupComponent.styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useSpring } from "@react-spring/web";

export default function PopupComponent({ data, setData }) {
    const [isOpen, setIsOpen] = useState(true);

    const fadeInFromTop = useSpring({
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
        <Popup style={fadeInFromTop}>
            <FaRegCircleXmark />
            <h1>Error!</h1>
            <PopupText>{data.error}</PopupText>
            <PopupButton onClick={() => setIsOpen(false)}>OK</PopupButton>
        </Popup>
    );
}
