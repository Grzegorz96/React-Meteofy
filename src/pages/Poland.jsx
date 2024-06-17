import PolandContainer from "../containers/Poland";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * @component
 * Functional component that renders the PolandContainer.
 *
 * This component is responsible for rendering the PolandContainer, which handles the display
 * and management of data related to Poland.
 *
 * @returns {JSX.Element} The PolandContainer component.
 */
export default function PolandPage() {
    // Set the document title.
    useDocumentTitle("Meteofy - Poland");
    return <PolandContainer />;
}
