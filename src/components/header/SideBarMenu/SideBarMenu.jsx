import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { StyledBurgerMenu } from "./SideBarMenu.styles";
import Navbar from "../Navbar/Navbar";

export default function SideBarMenu() {
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
