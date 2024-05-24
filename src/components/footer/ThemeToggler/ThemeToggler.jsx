import {
    TogglerContainer,
    Toggler,
    SwitcherElement,
} from "./ThemeToggler.styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleThemeMode } from "../../../state/themeDataSlice";

export default function ThemeToggler() {
    const isDarkMode = useSelector(({ themeData }) => themeData.isDarkMode);
    const dispatch = useDispatch();

    return (
        <TogglerContainer>
            <Toggler
                onChange={() => {
                    dispatch(toggleThemeMode());
                }}
                checked={isDarkMode}
            />
            <SwitcherElement
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        dispatch(toggleThemeMode());
                    }
                }}
            />
        </TogglerContainer>
    );
}
