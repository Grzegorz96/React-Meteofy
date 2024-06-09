import { Footer, PageName } from "./Footer.styles";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

/**
 * @component
 * Renders the Footer component.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
export default function FooterComponent() {
    return (
        <Footer>
            <ThemeToggler />
            <PageName />
        </Footer>
    );
}
