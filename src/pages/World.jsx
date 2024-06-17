import WorldContainer from "../containers/World";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * @component
 * Functional component that renders the WorldContainer.
 *
 * This component is responsible for rendering the WorldContainer, which handles the display
 * and management of data related to the world.
 *
 * @returns {JSX.Element} The WorldContainer component.
 */
export default function WorldPage() {
    // Set the document title.
    useDocumentTitle("Meteofy - World");
    return <WorldContainer />;
}
