import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AsyncPaginate } from "react-select-async-paginate";
import { asyncPaginateStyles } from "./SearchComponent.styles";
import { setCityCoords } from "../../state/cityCoordsSlice";
import { loadOptions } from "../../api/fetchCities";

export default function SearchComponent() {
    const [search, setSearch] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (searchedData) => {
        setSearch(searchedData);
        dispatch(setCityCoords(searchedData.value));
        navigate("/");
    };

    return (
        <AsyncPaginate
            placeholder="Search for a city"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            styles={asyncPaginateStyles}
            loadOptions={loadOptions}
        />
    );
}
