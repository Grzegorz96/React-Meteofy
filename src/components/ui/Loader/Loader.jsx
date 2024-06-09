import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper, LoaderText } from "./Loader.styles";
import { useTheme } from "styled-components";

/**
 * @component
 * Loader component to display a loading spinner with optional text.
 *
 * @param {Object} props - Component props.
 * @param {string} props.color - Optional color for the loader spinner and text.
 * @returns {JSX.Element} Loader component.
 */
export default function Loader({ color }) {
    // Get the current theme from styled-components.
    const theme = useTheme();
    // Set the current color to the provided color or the primary text color from the theme.
    const currentColor = color || theme.textPrimary;

    return (
        <LoaderWrapper>
            <ClipLoader loading={true} color={currentColor} size={100} />
            <LoaderText color={currentColor}>Loading...</LoaderText>
        </LoaderWrapper>
    );
}
