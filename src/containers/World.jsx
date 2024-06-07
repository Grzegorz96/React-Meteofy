import React from "react";
import WorldGlobe from "../components/world/WorldGlobe/WorldGlobe";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { worldCapitalsData } from "../utils/citiesConfig/worldCapitalsData";
import Loader from "../components/ui/Loader/Loader";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";

/**
 * Functional component that handles the rendering of world data.
 *
 * This component uses `useDataWithMapsHandler` to fetch and manage data related to world capitals. It displays different UI elements based on the state of the data:
 * - An error modal if there is an error.
 * - A loader while data is loading.
 * - A world globe with the fetched cities data when the data is successfully fetched.
 *
 * @returns {JSX.Element} The rendered components based on the state of the data.
 */
export default function WorldContainer() {
    // Fetching data for world capitals.
    const { data, setData } = useDataWithMapsHandler(worldCapitalsData);

    return (
        <>
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData?.list && (
                <WorldGlobe fetchedCitiesData={data.fetchedData.list} />
            )}
        </>
    );
}
