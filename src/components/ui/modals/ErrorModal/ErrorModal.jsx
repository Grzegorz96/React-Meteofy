import { useState } from 'react';
import {
  Overlay,
  Modal,
  ModalText,
  ModalButton,
  ModalTitle,
} from './ErrorModal.styles';
import { FaRegCircleXmark } from 'react-icons/fa6';

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

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setData((prev) => ({ ...prev, error: null }));
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <Modal
        $isOpen={isOpen}
        onAnimationEnd={handleAnimationEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <FaRegCircleXmark />
        <ModalTitle>Error!</ModalTitle>
        <ModalText>{data.error}</ModalText>
        <ModalButton
          onClick={handleClose}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Tab') {
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
