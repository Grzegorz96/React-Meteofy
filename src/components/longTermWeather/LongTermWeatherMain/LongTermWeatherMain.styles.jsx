import styled from "styled-components";
import { DateRangePicker } from "rsuite";
import { darkTheme, lightTheme } from "../../../utils/styles/theme";

export const customSelectStyles = (theme) => ({
    // Styles for each option in the dropdown menu.
    option: (provided, state) => ({
        ...provided,
        cursor: "pointer",
        color: state.isSelected ? theme.textPrimary : "none",
        backgroundColor:
            state.isFocused || state.isSelected
                ? theme.textSecondary
                : provided.backgroundColor,

        ":active": {
            backgroundColor: theme.textSecondary,
        },
    }),
    menu: (provided) => ({
        ...provided,
        marginTop: "15px",
        backgroundColor: theme.secondary,
        color: theme.textPrimary,
        border: `1px solid ${theme.textSecondary}`,
        transition:
            "background-color 0.25s ease-in-out, border 0.25s ease-in-out, color 0.25s ease-in-out",
    }),
    // Styles for the control (outer container) of the Select component.
    control: (provided, state) => ({
        ...provided,
        width: "200px",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: theme.secondary,
        border: "none",
        boxShadow: `0px ${state.isFocused ? "0px 0px 3px" : "0px 0px 2px"} ${
            theme.textSecondary
        }`,
        transition:
            "background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out",

        "@media (max-width: 768px)": {
            minHeight: 32,
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: theme.textPrimary,
        transition: "color 0.25s ease-in-out",
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
});

export const LongTermWeatherWrapper = styled.div`
    border-radius: 6px;
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.secondary};
    transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
    padding: 10px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    max-width: 1000px;
    width: 100%;
    margin-top: 40px;

    @media (max-width: 768px) {
        margin-top: 50px;
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
    border-bottom: 1px solid ${({ theme }) => theme.textPrimary};
    transition: border-bottom 0.25s ease-in-out;
`;

export const dateRangePickerMenu = (theme) => ({
    marginTop: "15px",
    zIndex: 0,
    backgroundColor: theme.secondary,
    border: `1px solid ${theme.textSecondary}`,
    transition: "background-color 0.25s ease-in-out, border 0.25s ease-in-out",
});

export const DateRangePickerStyled = styled(DateRangePicker)`
    max-width: 355px;
    width: 100%;
    border: none;

    @media (max-width: 400px) {
        max-width: 264px;
    }

    .rs-input-group {
        height: 38px;
        background-color: ${({ theme }) => theme.secondary};
        border: none;
        outline: none;
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.textSecondary};
        transition: background-color 0.25s ease-in-out,
            box-shadow 0.25s ease-in-out;

        @media (max-width: 768px) {
            height: 32px;
        }

        .rs-date-range-input {
            background-color: ${({ theme }) => theme.secondary};
            color: ${({ theme }) => theme.textPrimary};
            transition: background-color 0.25s ease-in-out,
                color 0.25s ease-in-out;
            font-size: 16px;
            border-radius: 6px 0 0 6px;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }

        .rs-input-group-addon {
            background-color: ${({ theme }) => theme.secondary};
            transition: background-color 0.25s ease-in-out;
            font-size: 16px;
            border-radius: 0 6px 6px 0;

            .rs-icon {
                color: ${({ theme }) => theme.textPrimary};
                transition: color 0.25s ease-in-out;
            }
        }
    }

    .rs-input-group-focus {
        outline: none !important;
        box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.textSecondary};
    }
`;
