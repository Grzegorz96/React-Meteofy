import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
    overflow: hidden;
`;

export const Modal = styled(animated.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 25px;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textPrimary};
    box-shadow: 0 0 10px ${({ theme }) => theme.shadow};
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
        box-shadow 0.25s ease-in-out;
    border-radius: 5px;
    max-width: 550px;
    width: 90%;

    svg {
        font-size: 90px;
        color: #f27474;

        @media (max-width: 768px) {
            font-size: 70px;
        }
    }
`;

export const ModalTitle = styled.h1`
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const ModalText = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ModalButton = styled.button`
    padding: 10px 20px;
    background-color: #7066e0;
    color: ${({ theme }) => theme.textPrimary};
    transition: color 0.25s ease-in-out;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;

    &:focus {
        outline: 3px solid #b7b2ef;
    }

    &:hover {
        background-color: #655cc9;
    }
`;
