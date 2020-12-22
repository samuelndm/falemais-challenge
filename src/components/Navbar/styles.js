import styled from "styled-components";
import { ResponsiveContainer } from "../../styles/GlobalStyles";

export const Container = styled.div`
  z-index: 10;
  width: auto;
  height: 76px;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 3px 3px 14px -9px rgba(0, 0, 0, 0.51);
`;

export const Content = styled(ResponsiveContainer)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
