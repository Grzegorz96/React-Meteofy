import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AsyncPaginate } from "react-select-async-paginate";
import { asyncPaginateStyles } from "./SearchComponent.styles";
import { setCityData } from "../../state/cityDataSlice";
import { loadOptions } from "../../api/fetchCities";

export default function SearchComponent() {
    const cityData = useSelector(({ cityData }) => cityData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (searchedData) => {
        dispatch(setCityData(searchedData));
        navigate("/");
    };

    return (
        <AsyncPaginate
            placeholder="Search for a city"
            debounceTimeout={1000}
            value={
                cityData.value.latitude && cityData.value.longitude
                    ? cityData
                    : null
            }
            onChange={handleOnChange}
            styles={asyncPaginateStyles}
            loadOptions={loadOptions}
            additional={{ page: 1 }}
        />
    );
}
