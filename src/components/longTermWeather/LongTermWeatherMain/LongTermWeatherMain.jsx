import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LongTermWeatherLinearChart from "../LinearChart/LinearChart";
import { useState } from "react";
import { LongTermWeatherWrapper } from "./LongTermWeatherMain.styles";
import { getLongTermWeatherFilteredLinearChartData } from "../../../utils/charts/chartData";
import { selectOptions } from "../../../utils/constants/selectOptions";

export default function LongTermWeatherMain({ seasonalData, city }) {
    const [selectedDataset, setSelectedDataset] = useState(selectOptions[0]);
    const [selectedDate, setSelectedDate] = useState(null);

    const filteredData = getLongTermWeatherFilteredLinearChartData(
        seasonalData,
        selectedDataset
    );

    // console.log(selectedDate);

    return (
        <LongTermWeatherWrapper>
            <Select
                options={selectOptions}
                defaultValue={selectOptions[0]}
                onChange={(dataSet) => {
                    setSelectedDataset(dataSet);
                }}
            />
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                minDate={new Date().setDate(new Date().getDate() - 92)}
                maxDate={new Date().setDate(new Date().getDate() + 116)}
                isClearable
                placeholderText=""
            />
            <LongTermWeatherLinearChart
                filteredData={filteredData}
                selectedDataset={selectedDataset}
                city={city}
            />
        </LongTermWeatherWrapper>
    );
}
