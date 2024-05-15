import styled from "styled-components";

export const HamburgerBox = styled.button`
    height: 100%;
    background-color: red;
    width: 200px;
    border: none;
`;

export const SideBar = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #66666684;
    height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: 0.3s linear;
`;
