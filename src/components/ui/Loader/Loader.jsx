import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper, LoaderText } from "./Loader.styles";

export default function Loader({ color = "#000" }) {
    return (
        <LoaderWrapper>
            <ClipLoader loading={true} color={color} size={100} />
            <LoaderText $color={color}>Loading...</LoaderText>
        </LoaderWrapper>
    );
}
