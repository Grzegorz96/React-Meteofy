import styled from "styled-components";

export const ScrollableContainer = styled.div.attrs({
    tabIndex: 0,
})`
    overflow-y: auto;
    display: flex;
    gap: 3px;
    width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    &:focus-visible {
        outline: none;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
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

    &:focus-visible {
        outline: none;
        background-color: rgba(0, 0, 0, 0.3);
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
