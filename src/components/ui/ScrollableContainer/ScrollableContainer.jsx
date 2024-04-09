import React, { useEffect, useRef } from "react";
import {
    ScrollContainer,
    NavigateButton,
    ScrollWrapper,
} from "./ScrollableContainer.styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function ScrollableContainer({ children }) {
    const scrollableContainerRef = useRef(null);

    function handleBackButtonClick() {
        const scrollableContainer = scrollableContainerRef.current;
        scrollableContainer.style.scrollBehavior = "smooth";
        scrollableContainer.scrollLeft -= 400;
    }

    function handleNextButtonClick() {
        const scrollableContainer = scrollableContainerRef.current;
        scrollableContainer.style.scrollBehavior = "smooth";
        scrollableContainer.scrollLeft += 400;
    }

    useEffect(() => {
        const scrollableContainer = scrollableContainerRef.current;
        const handleWheelScroll = (evt) => {
            evt.preventDefault();
            scrollableContainer.style.scrollBehavior = "auto";
            scrollableContainer.scrollLeft += evt.deltaY;
        };
        scrollableContainer.addEventListener("wheel", handleWheelScroll, {
            passive: false,
        });
        return () => {
            scrollableContainer.removeEventListener("wheel", handleWheelScroll);
        };
    }, []);

    return (
        <ScrollWrapper>
            <NavigateButton onClick={handleBackButtonClick} $left="15px">
                <FaChevronLeft />
            </NavigateButton>
            <ScrollContainer ref={scrollableContainerRef}>
                {children}
            </ScrollContainer>
            <NavigateButton onClick={handleNextButtonClick} $right="15px">
                <FaChevronRight />
            </NavigateButton>
        </ScrollWrapper>
    );
}
