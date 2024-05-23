import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
    padding: 25px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
    text-align: center;

    @media (max-width: 350px) {
        font-size: 24px;
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    background-color: #7066e0;
    padding: 10px 20px;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 16px;
    color: ${(props) => props.theme.dark.text};
    border: none;
    border-radius: 5px;
    font-weight: 500;
    text-align: center;

    &:focus {
        outline: 3px solid #b7b2ef;
    }

    &:hover {
        background-color: #655cc9;
    }
`;
