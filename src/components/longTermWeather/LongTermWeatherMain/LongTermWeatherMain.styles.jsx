import styled from "styled-components";
import { DateRangePicker } from "rsuite";

export const customSelectStyles = {
    // Styles for each option in the dropdown menu.
    option: (provided) => ({
        ...provided,
        cursor: "pointer",
    }),
    menu: (provided) => ({
        ...provided,
        marginTop: "15px",
    }),
    // Styles for the control (outer container) of the Select component.
    control: (provided) => ({
        ...provided,
        width: "200px",
        borderRadius: "6px",
        cursor: "pointer",

        "@media (max-width: 768px)": {
            minHeight: 32,
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#000000",
        fontSize: "16px",
        "@media (max-width: 768px)": {
            fontSize: "14px",
        },
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        "@media (max-width: 768px)": {
            paddingBlock: 0,
        },
    }),
    clearIndicator: (provided) => ({
        ...provided,
        "@media (max-width: 768px)": {
            paddingBlock: 0,
        },
    }),
};

export const LongTermWeatherWrapper = styled.div`
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    background-color: ${({ theme }) => theme.dark.primary};
    padding: 10px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    max-width: 1000px;
    width: 100%;
    margin-top: 30px;

    @media (max-width: 768px) {
        margin-top: 40px;
        padding: 10px;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
`;

export const DateRangePickerStyled = styled(DateRangePicker)`
    max-width: 355px;
    width: 100%;

    @media (max-width: 400px) {
        max-width: 264px;
    }

    div {
        height: 38px;

        @media (max-width: 768px) {
            height: 32px;
        }
    }
`;
