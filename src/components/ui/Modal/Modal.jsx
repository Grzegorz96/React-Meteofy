import { useState } from "react";
import { Overlay, Modal, ModalText, ModalButton } from "./Modal.styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useSpring } from "@react-spring/web";

export default function ModalComponent({ data, setData }) {
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
            <Modal
                style={fadeInFromTopAnimation}
                onClick={(e) => e.stopPropagation()}
            >
                <FaRegCircleXmark />
                <h1>Error!</h1>
                <ModalText>{data.error}</ModalText>
                <ModalButton onClick={() => setIsOpen(false)}>OK</ModalButton>
            </Modal>
        </Overlay>
    );
}
