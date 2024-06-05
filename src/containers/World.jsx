import React from "react";
import WorldGlobe from "../components/world/WorldGlobe/WorldGlobe";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { worldCapitalsData } from "../utils/citiesConfig/worldCapitalsData";
import Loader from "../components/ui/Loader/Loader";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";

export default function WorldContainer() {
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
