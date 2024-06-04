import { AsyncPaginate } from "react-select-async-paginate";
import { loadOptions } from "../../../services/api/fetchCities";
import { useTheme } from "styled-components";

export default function SearchEngine({
    placeholder,
    city,
    handleOnChange,
    styles,
}) {
    const theme = useTheme();

    return (
        <AsyncPaginate
            menuPortalTarget={document.body}
            placeholder={placeholder}
            debounceTimeout={1000}
            value={city}
            onChange={handleOnChange}
            styles={styles(theme)}
            loadOptions={loadOptions}
            additional={{ page: 1 }}
        />
    );
}
