import React from "react";
import { Popup, PopupText, PopupButton } from "./PopupComponent.styles";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function PopupComponent({ data, setData }) {
    return (
        <Popup>
            <FaRegCircleXmark />
            <h1>Error!</h1>
            <PopupText>{data.error}</PopupText>
            <PopupButton onClick={() => setData({ ...data, error: null })}>
                OK
            </PopupButton>
        </Popup>
    );
}
