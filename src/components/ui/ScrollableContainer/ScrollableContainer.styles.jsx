import styled from "styled-components";

export const ScrollContainer = styled.div`
    overflow-y: auto;
    display: flex;
    gap: 3px;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
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
    border: 2px solid ${(props) => props.theme.dark.primary};
`;

export const ScrollWrapper = styled.div`
    display: flex;
    gap: 5px;
    background-color: #f5f5f5ac;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-inline: 10px;
    width: calc(100% - 20px);
    height: 120px;
`;
