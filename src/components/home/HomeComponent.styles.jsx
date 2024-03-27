import styled, { css } from "styled-components";

export const CurrentWeatherLabel = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-rows: 20px 15px 1fr 10px 1fr 1fr; */
    grid-template-areas:
        "city city city current"
        "icon temp description description"
        "icon temp feels feels"
        "gap gap gap gap"
        "sunrise sunset mintemp maxtemp"
        "wind humidity pressure visibility";

    width: 90%;
    max-width: 600px;
    background-color: #2595beae;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
`;

export const Text = styled.div`
    grid-area: ${(props) => props.$gridArea};
    font-size: ${(props) => props.$fontSize};
    padding: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    /* border: 1px solid #fff; */
    text-align: center;

    ${(props) =>
        props.$modifier1 &&
        css`
            text-align: end;
            justify-content: flex-end;
        `}
    ${(props) =>
        props.$modifier2 &&
        css`
            justify-content: center;
        `}
`;
