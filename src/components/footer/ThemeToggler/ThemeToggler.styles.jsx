import styled from "styled-components";

export const TogglerContainer = styled.div`
    position: relative;
    margin-left: 5px;
    height: 16px;
`;

export const Toggler = styled.input.attrs({
    type: "checkbox",
    id: "themeToggler",
})`
    display: none;

    &:checked + label::after {
        transform: translateX(24px);
    }
`;

export const SwitcherElement = styled.label.attrs({
    htmlFor: "themeToggler",
    tabIndex: 0,
    role: "switch",
    "aria-label": "Switch between dark and light mode",
})`
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    outline: 0px solid ${({ theme }) => theme.textPrimary};
    border-radius: 1em;
    transition: outline-color 0.25s ease-in-out;

    &::before {
        content: "";
        height: 100%;
        width: 40px;
        border-radius: 1em;
        background-color: ${({ theme }) => theme.primary};
        transition: background-color 0.25s ease-in-out;
    }

    &::after {
        content: "";
        height: 12px;
        width: 12px;
        border-radius: 1em;
        background-color: ${({ theme }) => theme.textPrimary};
        position: absolute;
        left: 2px;
        transition: background-color 0.25s ease-in-out,
            transform 0.25s ease-in-out;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.textPrimary};
    }
`;
