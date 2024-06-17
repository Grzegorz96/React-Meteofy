import LongTermWeatherContainer from "../containers/LongTermWeather";
import useDocumentTitle from "../hooks/useDocumentTitle";

/**
 * @component
 * Functional component that renders the LongTermWeatherContainer.
 *
 * This component is responsible for rendering the LongTermWeatherContainer, which handles the display
 * and management of long-term weather data.
 *
 * @returns {JSX.Element} The LongTermWeatherContainer component.
 */
export default function LongTermWeatherPage() {
    // Set the document title.
    useDocumentTitle("Meteofy - Long Term Weather");
    return <LongTermWeatherContainer />;
}
