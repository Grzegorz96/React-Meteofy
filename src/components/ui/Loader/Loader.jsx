import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper, LoaderText } from "./Loader.styles";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../../utils/styles/theme";

export default function Loader({ color }) {
    const isDarkMode = useSelector(({ themeData }) => themeData.isDarkMode);

    const currentColor =
        color || isDarkMode ? darkTheme.textPrimary : lightTheme.textPrimary;

    return (
        <LoaderWrapper>
            <ClipLoader loading={true} color={currentColor} size={100} />
            <LoaderText color={currentColor}>Loading...</LoaderText>
        </LoaderWrapper>
    );
}
