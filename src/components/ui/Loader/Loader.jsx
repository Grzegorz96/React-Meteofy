import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper, LoaderText } from "./Loader.styles";
import { useTheme } from "styled-components";

export default function Loader({ color }) {
    const theme = useTheme();
    const currentColor = color || theme.textPrimary;

    return (
        <LoaderWrapper>
            <ClipLoader loading={true} color={currentColor} size={100} />
            <LoaderText color={currentColor}>Loading...</LoaderText>
        </LoaderWrapper>
    );
}
