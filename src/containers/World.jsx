import React from "react";
import WorldGlobe from "../components/world/WorldGlobe";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { worldCapitals } from "../utils/constants/worldCapitalsData";
import LoaderComponent from "../components/ui/Loader/Loader";
import ModalComponent from "../components/ui/Modal/Modal";

export default function WorldContainer() {
    // const { data, setData } = useDataWithMapsHandler(worldCapitals);

    // return (
    //     <>
    //         {data.error && <ModalComponent data={data} setData={setData} />}
    //         {data.loading && <LoaderComponent />}
    //         {data.fetchedData && (
    //             <WorldGlobe fetchedCitiesData={data.fetchedData} />
    //         )}
    //     </>
    // );
    return <WorldGlobe />;
}
