import { Footer, PageName } from "./Footer.styles";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function FooterComponent() {
    return (
        <Footer>
            <ThemeToggler />
            <PageName />
        </Footer>
    );
}
