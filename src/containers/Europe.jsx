import EuropeMap from "../components/EuropeMap/EuropeMap";
import useDataWithMapsHandler from "../hooks/useDataWithMapsHandler";
import { europeCapitalsData } from "../utils/citiesConfig/europeCapitalsData";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";

/**
 * @component
 * Functional component responsible for rendering the Europe map.
 *
 * This component utilizes the `useDataWithMapsHandler` hook to fetch and manage data related to European capitals.
 * It renders the `EuropeMap` component to display the map with markers for the fetched cities.
 *
 * @returns {JSX.Element} The rendered components based on the state of the data.
 */
export default function EuropeContainer() {
    // Fetching data for europe capitals.
    const { data, setData } = useDataWithMapsHandler(europeCapitalsData);

    return (
        <>
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData?.list && (
                <EuropeMap fetchedCitiesData={data.fetchedData.list} />
            )}
        </>
    );
}
