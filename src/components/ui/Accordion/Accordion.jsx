import { StyledAccordion, Title } from "./Accordion.styles";

/**
 * @component
 * Custom accordion component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.listOfRefs - List of references to scrollable elements.
 * @param {ReactNode} props.children - Child components to be displayed.
 * @returns {JSX.Element} The accordion component.
 */
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
