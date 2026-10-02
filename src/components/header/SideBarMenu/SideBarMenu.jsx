import { useCallback, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { StyledBurgerMenu } from './SideBarMenu.styles';
import Navbar from '../Navbar/Navbar';

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

  // Chrome warns if .bm-menu-wrap gets aria-hidden while a descendant still has focus.
  const releaseMenuFocus = useCallback(() => {
    const menuWrap = containerRef.current?.querySelector('.bm-menu-wrap');
    const activeElement = document.activeElement;

    if (
      activeElement instanceof HTMLElement &&
      menuWrap?.contains(activeElement)
    ) {
      activeElement.blur();
    }
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    releaseMenuFocus();
    setIsOpen(false);
  }, [releaseMenuFocus]);

  return (
    <StyledBurgerMenu ref={containerRef}>
      <Menu right isOpen={isOpen} onOpen={openMenu} onClose={closeMenu}>
        <Navbar isMobile onClose={closeMenu} />
      </Menu>
    </StyledBurgerMenu>
  );
}
