import styled from "styled-components";

export const Main = styled.main`
    margin-top: 70px;
    padding: 20px;
    width: 100%;
    /* min-height: 100%; */
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 10px;
    overflow-y: auto;
    overflow-x: hidden;
`;
