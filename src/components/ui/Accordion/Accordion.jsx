import { StyledAccordion, Title } from "./Accordion.styles";

export default function CustomAccordion({ listOfRefs, children }) {
    return (
        <StyledAccordion
            allowZeroExpanded
            onChange={(value) => {
                if (value.length) {
                    listOfRefs.forEach((ref) => {
                        if (ref.current) {
                            ref.current.style.scrollBehavior = "auto";
                            ref.current.scrollLeft = 0;
                        }
                    });
                }
            }}
        >
            <Title>Daily</Title>
            {children}
        </StyledAccordion>
    );
}
