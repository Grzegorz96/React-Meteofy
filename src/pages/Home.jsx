import HomeContainer from "../containers/Home";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * @component
 * Functional component that renders the HomeContainer.
 *
 * This component is responsible for rendering the HomeContainer, which handles the display
 * and management of the home page content.
 *
 * @returns {JSX.Element} The HomeContainer component.
 */
export default function HomePage() {
    // Set the document title.
    useDocumentTitle("Meteofy - Home");
    return <HomeContainer />;
}
