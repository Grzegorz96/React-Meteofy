import { useCallback, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { StyledBurgerMenu } from './SideBarMenu.styles';
import Navbar from '../Navbar/Navbar';
import { releaseFocusWithin } from '../../../utils/helpers';

/**
 * @component
 * Renders a side bar menu component.
 *
 * @returns {JSX.Element} The rendered side bar menu component.
 */
export default function SideBarMenu() {
  // State to manage the open state of the side bar.
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    releaseFocusWithin(containerRef.current?.querySelector('.bm-menu-wrap'));
    setIsOpen(false);
  }, []);

  return (
    <StyledBurgerMenu ref={containerRef}>
      <Menu right isOpen={isOpen} onOpen={openMenu} onClose={closeMenu}>
        <Navbar isMobile onClose={closeMenu} />
      </Menu>
    </StyledBurgerMenu>
  );
}
