import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper, LoaderText } from "./Loader.styles";

export default function Loader() {
    return (
        <LoaderWrapper>
            <ClipLoader loading={true} color="#000" size={100} />
            <LoaderText>Loading...</LoaderText>
        </LoaderWrapper>
    );
}
