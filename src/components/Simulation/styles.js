import styled from "styled-components";
import { ResponsiveContainer } from "../../styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)``;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Options = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & > * {
    width: 20%;
  }

  & > i {
    width: 7%;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

export const ArrowIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #008dca;

  @media screen and (max-width: 991px) {
    display: none;
  }
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
