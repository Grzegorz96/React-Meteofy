import PolandMap from "../components/PolandMap/PolandMap";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { polishCitiesData } from "../utils/citiesConfig/polishCitiesData";

export default function PolandContainer() {
    const { data, setData } = useDataWithMapsHandler(polishCitiesData);

    return (
        <>
            {data.error && <ErrorModal data={data} setData={setData} />}
            {data.loading && <Loader />}
            {data.fetchedData && (
                <PolandMap fetchedCitiesData={data.fetchedData} />
            )}
        </>
    );
}
