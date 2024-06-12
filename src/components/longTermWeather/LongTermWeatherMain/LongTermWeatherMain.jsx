import Select from "react-select";
import {
    LongTermWeatherWrapper,
    InputWrapper,
    customSelectStyles,
    DateRangePickerStyled,
    dateRangePickerMenu,
} from "./LongTermWeatherMain.styles";
import "rsuite/dist/rsuite-no-reset.min.css";
import "../../../assets/CSS/rsuiteStyles/dateRangePickerStyles.css";
import LongTermWeatherLinearChart from "../LinearChart/LinearChart";
import { useState, useMemo, memo } from "react";
import { getLongTermWeatherFilteredLinearChartData } from "../../../utils/charts/chartData";
import { getLongTermWeatherLinearChartOptions } from "../../../utils/charts/chartOptions";
import { selectOptions } from "../../../utils/constants/selectOptions";
import { getDefaultDateRange } from "../../../utils/helpers";
import { ranges } from "../../../utils/constants/dateRangePickerRanges";
import { startOfDay, addDays, subDays } from "date-fns";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

/**
 * @component
 * Renders the main component for displaying long-term weather data.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.seasonalData - The seasonal weather data.
 * @param {string} props.city - The name of the city.
 * @returns {JSX.Element} The rendered component.
 */
function LongTermWeatherMain({ seasonalData, city }) {
    // Get the current theme from styled-components.
    const theme = useTheme();
    // Check if the screen width is less than 400px.
    const moveRangesToBottom = useMediaQuery({ query: "(max-width: 400px)" });
    // Set the default selected dataset and date range.
    const [selectedDataset, setSelectedDataset] = useState(selectOptions[0]);
    const [selectedDateRange, setSelectedDateRange] =
        useState(getDefaultDateRange);

    // Function to set the selected dataset.
    const changeDateRange = (value) => {
        if (value) {
            setSelectedDateRange(value);
        } else {
            setSelectedDateRange(getDefaultDateRange);
        }
    };

    // Get the filtered data and options for the linear chart.
    const filteredData = useMemo(
        () =>
            getLongTermWeatherFilteredLinearChartData(
                seasonalData,
                selectedDataset,
                theme
            ),
        [seasonalData, selectedDataset, theme]
    );

    // Get the options for the linear chart.
    const options = useMemo(
        () =>
            getLongTermWeatherLinearChartOptions(
                selectedDataset,
                selectedDateRange,
                city,
                theme
            ),
        [selectedDataset, selectedDateRange, city, theme]
    );

    return (
        <LongTermWeatherWrapper>
            <InputWrapper>
                <Select
                    styles={customSelectStyles(theme)}
                    options={selectOptions}
                    onChange={setSelectedDataset}
                    value={selectedDataset}
                />
                <DateRangePickerStyled
                    menuStyle={dateRangePickerMenu(theme)}
                    menuClassName={theme.isDarkMode ? "dark-mode-menu" : null}
                    placement="bottom"
                    showOneCalendar
                    character=" - "
                    ranges={ranges(moveRangesToBottom)}
                    format="MMMM d, yyyy"
                    value={selectedDateRange}
                    onChange={changeDateRange}
                    shouldDisableDate={(date) => {
                        return (
                            date < startOfDay(subDays(new Date(), 92)) ||
                            date > startOfDay(addDays(new Date(), 273))
                        );
                    }}
                />
            </InputWrapper>
            <LongTermWeatherLinearChart
                filteredData={filteredData}
                options={options}
            />
        </LongTermWeatherWrapper>
    );
}

export default memo(LongTermWeatherMain);
