import {
    TogglerContainer,
    Toggler,
    SwitcherElement,
} from "./ThemeToggler.styles";
import useLocalStorage from "use-local-storage";

export default function ThemeToggler() {
    const preference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const [isDarkMode, setIsDarkMode] = useLocalStorage(
        "isDarkMode",
        preference
    );

    return (
        <TogglerContainer>
            <Toggler
                onChange={() => setIsDarkMode(!isDarkMode)}
                checked={isDarkMode}
            />
            <SwitcherElement $isDarkMode={isDarkMode} />
        </TogglerContainer>
    );
}
