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
