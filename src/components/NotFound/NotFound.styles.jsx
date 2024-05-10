import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
    padding: 40px;
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

export const LinkStyled = styled(Link)`
    text-decoration: none;
    background-color: #7066e0;
    padding: 10px 20px;
    transition: 0.3s linear;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: 16px;
    color: ${(props) => props.theme.dark.text};
    border: none;
    border-radius: 5px;
    font-weight: 500;

    &:hover {
        background-color: #0056b3;
    }
`;
