import EuropeMap from "../components/EuropeMap/EuropeMap";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { europeCapitals } from "../utils/constants/EuropeCapitalsData";
import ModalComponent from "../components/ui/Modal/Modal";
import LoaderComponent from "../components/ui/Loader/Loader";

export default function EuropeContainer() {
    const { data, setData } = useDataWithMapsHandler(europeCapitals);

    return (
        <>
            {data.error && <ModalComponent data={data} setData={setData} />}
            {data.loading && <LoaderComponent />}
            {data.fetchedData && (
                <EuropeMap fetchedCitiesData={data.fetchedData} />
            )}
        </>
    );
}
