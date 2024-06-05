import EuropeMap from "../components/EuropeMap/EuropeMap";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { europeCapitalsData } from "../utils/citiesConfig/europeCapitalsData";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";

export default function EuropeContainer() {
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
