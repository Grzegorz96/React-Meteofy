import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { StyledBurgerMenu } from "./SideBarMenu.styles";
import Navbar from "../Navbar/Navbar";

/**
 * @component
 * Renders a side bar menu component.
 *
 * @returns {JSX.Element} The rendered side bar menu component.
 */
export default function SideBarMenu() {
    // State to manage the open state of the side bar.
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledBurgerMenu>
            <Menu
                right
                isOpen={isOpen}
                onStateChange={(state) => setIsOpen(state.isOpen)}
            >
                <Navbar isMobile={true} setIsOpen={setIsOpen} />
            </Menu>
        </StyledBurgerMenu>
    );
}
