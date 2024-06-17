import AirPollutionContainer from "../containers/AirPollution";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * @component
 * Functional component that renders the AirPollutionContainer.
 *
 * This component is responsible for rendering the AirPollutionContainer, which
 * handles the display and management of air pollution data.
 *
 * @returns {JSX.Element} The AirPollutionContainer component.
 */
export default function AirPollutionPage() {
    // Set the document title.
    useDocumentTitle("Meteofy - Air Pollution");
    return <AirPollutionContainer />;
}
