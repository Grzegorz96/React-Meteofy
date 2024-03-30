import styled, { keyframes } from "styled-components";

const fadeInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -200%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 25px;
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 550px;
    width: 90%;
    animation: ${fadeInFromTop} 0.8s ease forwards;

    svg {
        font-size: 90px;
        color: #f27474;
    }
`;

export const PopupText = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;

export const PopupButton = styled.button`
    padding: 10px 20px;
    background-color: #7066e0;
    color: ${(props) => props.theme.dark.text};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s linear;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0);
    &:hover {
        background-color: #0056b3;
    }
`;
