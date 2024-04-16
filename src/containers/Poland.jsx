import { useState, useEffect } from "react";
import PolandMap from "../components/PolandMap/PolandMap";
import { fetchPolishCitiesWeather } from "../services/api/fetchPolishCitiesWeather";
import PopupComponent from "../components/ui/Popup/Popup";
import LoaderComponent from "../components/ui/Loader/Loader";

export default function PolandContainer() {
    const [data, setData] = useState({
        fetchedData: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            setData({ ...data, loading: true });
            try {
                const fetchedData = await fetchPolishCitiesWeather();
                setData({ fetchedData, loading: false, error: null });
            } catch (error) {
                setData({
                    fetchedData: null,
                    loading: false,
                    error: error.message,
                });
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {data.loading && <LoaderComponent />}
            {data.error && <PopupComponent data={data} setData={setData} />}
            {data.fetchedData && (
                <PolandMap fetchedCitiesData={data.fetchedData} />
            )}
        </>
    );
}
