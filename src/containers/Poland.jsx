import PolandMap from "../components/PolandMap/PolandMap";
import ModalComponent from "../components/ui/Modal/Modal";
import LoaderComponent from "../components/ui/Loader/Loader";
import { useDataWithMapsHandler } from "../hooks/useDataWithMapsHandler";
import { polishCitiesData } from "../utils/constants/polishCitiesData";

export default function PolandContainer() {
    const { data, setData } = useDataWithMapsHandler(polishCitiesData);

    return (
        <>
            {data.error && <ModalComponent data={data} setData={setData} />}
            {data.loading && <LoaderComponent />}
            {data.fetchedData && (
                <PolandMap fetchedCitiesData={data.fetchedData} />
            )}
        </>
    );
}
