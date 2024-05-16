import styled from "styled-components";
import { DateRangePicker } from "rsuite";

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

export const LongTermWeatherWrapper = styled.div`
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 10px 20px 20px 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    max-width: 1000px;
    width: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
`;

export const DateRangePickerStyled = styled(DateRangePicker)`
    width: 320px;

    div {
        height: 38px;
    }
`;
