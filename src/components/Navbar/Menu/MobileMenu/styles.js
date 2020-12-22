import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export const Icon = styled.i`
  padding: 20px;
  color: ${({ isVisible }) => (isVisible ? "#fff" : "#333")};
  cursor: pointer;
  background-color: ${({ isVisible }) =>
    isVisible ? "#C8C8C8" : "transparent"};
`;

export const Menu = styled.div`
  padding: 10px 20px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 60px;
  right: 0;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0%)" : "translateX(200%)"};
  transition: transform 0.5s ease-in-out;
  background-color: #c8c8c8;
`;
