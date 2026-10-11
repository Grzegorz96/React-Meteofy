import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { StyledBurgerMenu } from './SideBarMenu.styles';
import Navbar from '../Navbar/Navbar';
import { FocusTrap } from 'focus-trap-react';

/**
 * @component
 * Renders a side bar menu component.
 *
 * @returns {JSX.Element} The rendered side bar menu component.
 */
export default function SideBarMenu() {
  // State to manage the open state of the side bar.
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{
        allowOutsideClick: true,
        escapeDeactivates: false,
        returnFocusOnDeactivate: true,
        fallbackFocus: '.bm-menu-wrap',
        tabbableOptions: { displayCheck: 'none' },
      }}
    >
      <StyledBurgerMenu>
        <Menu right isOpen={isOpen} onOpen={handleOpen} onClose={handleClose}>
          <Navbar isMobile onClose={handleClose} />
        </Menu>
      </StyledBurgerMenu>
    </FocusTrap>
  );
}
