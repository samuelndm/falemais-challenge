import styled from "styled-components";
import { ResponsiveContainer } from "../../styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 130px auto 30px;
`;

export const Title = styled.h1`
  margin: 0 auto 100px;
  width: 100%;
  text-align: center;
  font-size: 36px;

  @media screen and (max-width: 575px) {
    line-height: 32px;
    margin: 0 auto 50px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 8px 28px;
  display: inline-block;
  color: #008dca;
  background-color: transparent;
  border: 1px solid #008dca;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 500ms ease;

  &:hover {
    color: #fff;
    background-color: #008dca;
    border-color: transparent;
    transform: translate(0px, -5px);
  }
`;
