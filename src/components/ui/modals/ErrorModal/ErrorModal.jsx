import { useState } from 'react';
import { FocusTrap } from 'focus-trap-react';
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
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{
        initialFocus: '#error-modal-ok',
        fallbackFocus: '#error-modal',
        escapeDeactivates: false,
        allowOutsideClick: true,
        returnFocusOnDeactivate: true,
        tabbableOptions: { displayCheck: 'none' },
      }}
    >
      <Overlay onClick={handleClose}>
        <Modal
          id="error-modal"
          $isOpen={isOpen}
          onAnimationEnd={handleAnimationEnd}
          onClick={(e) => e.stopPropagation()}
        >
          <FaRegCircleXmark />
          <ModalTitle>Error!</ModalTitle>
          <ModalText>{data.error}</ModalText>
          <ModalButton id="error-modal-ok" onClick={handleClose}>
            OK
          </ModalButton>
        </Modal>
      </Overlay>
    </FocusTrap>
  );
}
