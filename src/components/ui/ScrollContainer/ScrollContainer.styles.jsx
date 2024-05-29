import styled from "styled-components";

export const ScrollableContainer = styled.div.attrs({
    tabIndex: 0,
})`
    overflow-y: auto;
    display: flex;
    gap: 3px;
    width: 100%;
    border-radius: 10px;
    transition: background-color 0.25s ease-in-out;

    &::-webkit-scrollbar {
        display: none;
    }

    &:focus-visible {
        outline: none;
        background-color: ${({ theme }) => theme.backgroundFocus};
    }
`;

export const NavigateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: ${(props) => props.$left};
    border-bottom-right-radius: ${(props) => props.$right};
    cursor: pointer;
    font-size: 20px;
    border: 2px solid ${({ theme }) => theme.textSecondary};
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textSecondary};
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
        border 0.25s ease-in-out;

    &:focus-visible {
        outline: none;
        background-color: ${({ theme }) => theme.backgroundFocus};
    }

    @media (max-width: 550px) {
        font-size: 13px;
    }

    @media (max-width: 500px) {
        display: none;
    }
`;

export const ScrollWrapper = styled.div`
    display: flex;
    gap: 5px;
    background-color: ${(props) => props.theme.secondary};
    transition: background-color 0.25s ease-in-out;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-inline: 10px;
    width: calc(100% - 20px);
    height: 120px;
    overflow: hidden;

    @media (max-width: 550px) {
        height: 100px;
    }

    @media (max-width: 500px) {
        height: 90px;
        padding-inline: 5px;
    }
`;
