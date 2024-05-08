import Select from "react-select";
import { DateRangePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import LongTermWeatherLinearChart from "../LinearChart/LinearChart";
import { useState, useMemo } from "react";
import {
    LongTermWeatherWrapper,
    InputWrapper,
} from "./LongTermWeatherMain.styles";
import { getLongTermWeatherFilteredLinearChartData } from "../../../utils/charts/chartData";
import { selectOptions } from "../../../utils/constants/selectOptions";
import { getDefaultDateRange } from "../../../utils/helpers";

const datepickerStyle = { width: "250px" };

export const customSelectStyles = {
    // Styles for each option in the dropdown menu.
    option: (provided) => ({
        ...provided,
        cursor: "pointer",
    }),

    // Styles for the control (outer container) of the Select component.
    control: (provided) => ({
        ...provided,
        borderRadius: "6px",
        cursor: "pointer",
        width: "200px",
    }),
};

export default function LongTermWeatherMain({ seasonalData, city }) {
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
                <DateRangePicker
                    style={datepickerStyle}
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
