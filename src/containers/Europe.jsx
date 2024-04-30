import EuropeMap from "../components/EuropeMap/EuropeMap";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { europeCapitals } from "../utils/constants/EuropeCapitalsData";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";

export default function EuropeContainer() {
    const { data, setData } = useDataWithMapsHandler(europeCapitals);

    return (
        <>
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData && (
                <EuropeMap fetchedCitiesData={data.fetchedData} />
            )}
        </>
    );
}
