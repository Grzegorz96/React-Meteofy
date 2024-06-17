import NotFound from "../components/NotFound/NotFound";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * @component
 * Functional component that renders the NotFound component.
 *
 * This component is responsible for rendering the NotFound component, which typically displays
 * a 404 error message when the user navigates to a non-existent route.
 *
 * @returns {JSX.Element} The NotFound component.
 */
export default function NotFoundPage() {
    // Set the document title.
    useDocumentTitle("Meteofy - Not Found");
    return <NotFound />;
}
