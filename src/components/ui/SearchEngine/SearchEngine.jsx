import { AsyncPaginate } from "react-select-async-paginate";
import { loadOptions } from "../../../services/api/fetchCities";

export default function SearchEngine({
    placeholder,
    city,
    handleOnChange,
    style,
}) {
    return (
        <AsyncPaginate
            menuPortalTarget={document.body}
            placeholder={placeholder}
            debounceTimeout={1000}
            value={city.value.latitude && city.value.longitude ? city : null}
            onChange={handleOnChange}
            styles={style}
            loadOptions={loadOptions}
            additional={{ page: 1 }}
        />
    );
}
