import Select from "react-select";
import {
    LongTermWeatherWrapper,
    InputWrapper,
    customSelectStyles,
    DateRangePickerStyled,
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
import { useSelector } from "react-redux";

function LongTermWeatherMain({ seasonalData, city }) {
    const moveRangesToBottom = useMediaQuery({ query: "(max-width: 400px)" });
    const [selectedDataset, setSelectedDataset] = useState(selectOptions[0]);
    const [selectedDateRange, setSelectedDateRange] =
        useState(getDefaultDateRange);
    const isDarkMode = useSelector(({ themeData }) => themeData.isDarkMode);

    const changeDateRange = (value) => {
        if (value) {
            setSelectedDateRange(value);
        } else {
            setSelectedDateRange(getDefaultDateRange);
        }
    };

    const filteredData = useMemo(() => {
        return getLongTermWeatherFilteredLinearChartData(
            seasonalData,
            selectedDataset,
            isDarkMode
        );
    }, [seasonalData, selectedDataset, isDarkMode]);

    const options = useMemo(() => {
        return getLongTermWeatherLinearChartOptions(
            selectedDataset,
            selectedDateRange,
            city,
            isDarkMode
        );
    }, [selectedDataset, selectedDateRange, city, isDarkMode]);

    return (
        <LongTermWeatherWrapper>
            <InputWrapper>
                <Select
                    styles={customSelectStyles}
                    options={selectOptions}
                    onChange={setSelectedDataset}
                    value={selectedDataset}
                />
                <DateRangePickerStyled
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
                            date > startOfDay(addDays(new Date(), 91))
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
