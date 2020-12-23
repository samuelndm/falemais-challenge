import styled from "styled-components";
import { ResponsiveContainer } from "../../styles/GlobalStyles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;

  @media screen and (max-width: 575px) {
    font-size: 40px;
    line-height: 20px;
    min-height: 100vh;
  }
`;

export const Content = styled(ResponsiveContainer)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  padding: 15px;
  color: #a3a3a3;
  font-size: 98px;
  line-height: 60px;
  text-align: center;

  @media screen and (max-width: 575px) {
    font-size: 40px;
    line-height: 20px;
  }
`;

export const TitleHeader = styled.p`
  font-weight: 100;
`;

export const Description = styled.p`
  padding: 15px;
  color: #4b7197;
  font: 200 22px/28px "Raleway", sans-serif;

  @media screen and (max-width: 575px) {
    font-size: 15px;
  }
`;

export const BreakLine = styled.br``;
