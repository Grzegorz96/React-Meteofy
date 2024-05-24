import styled from "styled-components";

export const TogglerContainer = styled.div`
    position: relative;
    margin-left: 5px;
    height: 100%;
`;

export const Toggler = styled.input.attrs({
    type: "checkbox",
    id: "themeToggler",
})`
    display: none;

    &:checked + label::after {
        transform: translateX(20px);
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
        height: 16px;
        width: 16px;
        border-radius: 1em;
        background-color: ${({ theme }) => theme.textPrimary};
        position: absolute;
        left: 2px;
        transition: background-color 0.25s ease-in-out,
            transform 0.25s ease-in-out;
    }
`;
