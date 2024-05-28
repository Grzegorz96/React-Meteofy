import { AsyncPaginate } from "react-select-async-paginate";
import { loadOptions } from "../../../services/api/fetchCities";
import { useSelector } from "react-redux";

export default function SearchEngine({
    placeholder,
    city,
    handleOnChange,
    styles,
}) {
    const isDarkMode = useSelector(({ themeData }) => themeData.isDarkMode);

    return (
        <AsyncPaginate
            // menuPortalTarget={document.body}
            placeholder={placeholder}
            debounceTimeout={1000}
            value={city.value.latitude && city.value.longitude ? city : null}
            onChange={handleOnChange}
            styles={styles(isDarkMode)}
            loadOptions={loadOptions}
            additional={{ page: 1 }}
        />
    );
}
