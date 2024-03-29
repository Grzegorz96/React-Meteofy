import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper, LoaderText } from "./LoaderComponent.styles";

export default function LoaderComponent() {
    return (
        <LoaderWrapper>
            <ClipLoader loading={true} color="#000" size={100} />
            <LoaderText>Loading...</LoaderText>
        </LoaderWrapper>
    );
}
