import PolandMap from "../components/PolandMap/PolandMap";
import ErrorModal from "../components/ui/modals/ErrorModal/ErrorModal";
import Loader from "../components/ui/Loader/Loader";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { polishCities } from "../utils/constants/polishCitiesData";

export default function PolandContainer() {
    const { data, setData } = useDataWithMapsHandler(polishCities);

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
