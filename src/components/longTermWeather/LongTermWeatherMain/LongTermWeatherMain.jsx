import Select from "react-select";
import {
    LongTermWeatherWrapper,
    InputWrapper,
    customSelectStyles,
    DateRangePickerStyled,
} from "./LongTermWeatherMain.styles";
import "rsuite/DateRangePicker/styles/index.css";
import LongTermWeatherLinearChart from "../LinearChart/LinearChart";
import { useState, useMemo, memo } from "react";
import { getLongTermWeatherFilteredLinearChartData } from "../../../utils/charts/chartData";
import { selectOptions } from "../../../utils/constants/selectOptions";
import { getDefaultDateRange } from "../../../utils/helpers";

function LongTermWeatherMain({ seasonalData, city }) {
    const [selectedDataset, setSelectedDataset] = useState(selectOptions[0]);
    const [selectedDateRange, setSelectedDateRange] =
        useState(getDefaultDateRange);

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
            selectedDataset
        );
    }, [seasonalData, selectedDataset]);

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
                    showOneCalendar
                    character=" - "
                    format="MMMM d, yyyy"
                    value={selectedDateRange}
                    onChange={changeDateRange}
                    shouldDisableDate={(date) => {
                        return (
                            date <
                                new Date().setDate(new Date().getDate() - 93) ||
                            date >
                                new Date().setDate(new Date().getDate() + 116)
                        );
                    }}
                />
            </InputWrapper>
            <LongTermWeatherLinearChart
                filteredData={filteredData}
                selectedDataset={selectedDataset}
                selectedDateRange={selectedDateRange}
                city={city}
            />
        </LongTermWeatherWrapper>
    );
}

export default memo(LongTermWeatherMain);
