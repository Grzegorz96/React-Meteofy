import EuropeContainer from "../containers/Europe";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * @component
 * Functional component that renders the EuropeContainer.
 *
 * This component is responsible for rendering the EuropeContainer, which handles the display
 * and management of data related to Europe.
 *
 * @returns {JSX.Element} The EuropeContainer component.
 */
export default function EuropePage() {
    // Set the document title.
    useDocumentTitle("Meteofy - Europe");
    return <EuropeContainer />;
}
