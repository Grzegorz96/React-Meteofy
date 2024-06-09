import { useState } from "react";
import {
    Overlay,
    Modal,
    ModalText,
    ModalButton,
    ModalTitle,
} from "./ErrorModal.styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useSpring } from "@react-spring/web";

/**
 * @component
 * Component for rendering an error modal.
 *
 * @param {object} props - The component props.
 * @param {object} props.data - Data object containing error information.
 * @param {function} props.setData - Function to update data.
 * @returns {JSX.Element} Returns the error modal component.
 */
export default function ErrorModal({ data, setData }) {
    const [isOpen, setIsOpen] = useState(true);

    // Animation for fading in and out from the top.
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
            // Reset error state after animation completion.
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
                <ModalTitle>Error!</ModalTitle>
                <ModalText>{data.error}</ModalText>
                <ModalButton
                    onClick={() => setIsOpen(false)}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === "Tab") {
                            e.preventDefault();
                        }
                    }}
                >
                    OK
                </ModalButton>
            </Modal>
        </Overlay>
    );
}
