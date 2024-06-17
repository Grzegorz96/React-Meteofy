import PolandMap from "../components/PolandMap/PolandMap";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";
import useDataWithMapsHandler from "../hooks/useDataWithMapsHandler";
import { polishCitiesData } from "../utils/citiesConfig/polishCitiesData";

/**
 * @component
 * Functional component that handles the rendering of data for Polish cities.
 *
 * This component uses `useDataWithMapsHandler` to fetch and manage data related to Polish cities. It displays different UI elements based on the state of the data:
 * - An error modal if there is an error.
 * - A loader while data is loading.
 * - A map of Poland with the fetched cities data when the data is successfully fetched.
 *
 * @returns {JSX.Element} The rendered components based on the state of the data.
 */
export default function PolandContainer() {
    // Fetching data for Polish cities.
    const { data, setData } = useDataWithMapsHandler(polishCitiesData);

    return (
        <>
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData?.list && (
                <PolandMap fetchedCitiesData={data.fetchedData.list} />
            )}
        </>
    );
}
