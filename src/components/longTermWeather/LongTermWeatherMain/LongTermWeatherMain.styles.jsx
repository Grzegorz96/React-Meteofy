import styled from "styled-components";
import { DateRangePicker } from "rsuite";

/**
 * Generates custom styles for a Select component based on the provided theme.
 *
 * @param {Object} theme - The theme object containing style properties.
 * @returns {Object} An object containing custom styles for the Select component.
 */
export const customSelectStyles = (theme) => ({
    /**
     * Styles for individual options within the Select menu.
     *
     * @param {Object} provided - The default styles provided by the library.
     * @param {Object} state - The current state of the option.
     * @returns {Object} Custom styles for the option.
     */
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
    /**
     * Styles for the Select menu.
     *
     * @param {Object} provided - The default styles provided by the library.
     * @returns {Object} Custom styles for the menu.
     */
    menu: (provided) => ({
        ...provided,
        marginTop: "15px",
        backgroundColor: theme.secondary,
        color: theme.textPrimary,
        border: `1px solid ${theme.textSecondary}`,
        borderRadius: "6px",
        transition:
            "background-color 0.25s ease-in-out, border 0.25s ease-in-out, color 0.25s ease-in-out",
    }),
    /**
     * Styles for the Select control.
     *
     * @param {Object} provided - The default styles provided by the library.
     * @param {Object} state - The current state of the control.
     * @returns {Object} Custom styles for the control.
     */
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
    /**
     * Styles for the single selected value in the Select.
     *
     * @param {Object} provided - The default styles provided by the library.
     * @returns {Object} Custom styles for the single value.
     */
    singleValue: (provided) => ({
        ...provided,
        color: theme.textPrimary,
        transition: "color 0.25s ease-in-out",
        fontSize: "16px",
        "@media (max-width: 768px)": {
            fontSize: "14px",
        },
    }),
    /**
     * Styles for the dropdown indicator in the Select.
     *
     * @param {Object} provided - The default styles provided by the library.
     * @returns {Object} Custom styles for the dropdown indicator.
     */
    dropdownIndicator: (provided) => ({
        ...provided,
        "@media (max-width: 768px)": {
            paddingBlock: 0,
        },
    }),
    /**
     * Styles for the clear indicator in the Select.
     *
     * @param {Object} provided - The default styles provided by the library.
     * @returns {Object} Custom styles for the clear indicator.
     */
    clearIndicator: (provided) => ({
        ...provided,
        "@media (max-width: 768px)": {
            paddingBlock: 0,
        },
    }),
});

/**
 * @component
 * Styled component for a wrapper element that contains linear chart, select and range date picker.
 *
 * @prop {Object} theme - The theme object containing color configurations.
 */

export const LongTermWeatherWrapper = styled.div`
    border-radius: 6px;
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.secondary};
    transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
    padding: 10px 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    max-width: 1000px;
    width: 100%;
    margin-top: 40px;

    @media (max-width: 768px) {
        margin-top: 50px;
        padding: 10px 10px 5px;
    }
`;

/**
 * @component
 * Styled component for a wrapper element containing input fields.
 *
 * @prop {Object} theme - The theme object containing color configurations.
 */
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

/**
 * Generates custom styles for the menu of a date range picker based on the provided theme.
 *
 * @param {Object} theme - The theme object containing color configurations.
 * @returns {Object} An object containing custom styles for the menu of the date range picker.
 */
export const dateRangePickerMenu = (theme) => ({
    borderRadius: "6px",
    marginTop: "15px",
    zIndex: 0,
    backgroundColor: theme.secondary,
    border: `1px solid ${theme.textSecondary}`,
    transition: "background-color 0.25s ease-in-out, border 0.25s ease-in-out",
});

/**
 * @component
 * Styled component for a DateRangePicker component. This component extends the style of the DateRangePicker
 * component and overrides the styles for classes inside it, depending on the theme provided.
 *
 * @prop {Object} theme - The theme object containing color configurations.
 */
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
