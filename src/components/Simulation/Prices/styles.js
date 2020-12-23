import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.div`
  margin: 15px;
  width: 195px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 16px;
  box-shadow: rgba(14, 14, 14, 0.15) 0px 10px 20px 0px;
`;

export const Title = styled.h4`
  margin: 0 0 20px;
  padding: 10px 0;
  width: 100%;
  border-radius: 16px 16px 0 0;
  color: #fff;
  text-align: center;

  &.smile {
    background-color: #007ca7;
  }

  &.frown {
    background-color: #b50000;
  }
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-family: arial;
`;

export const Icon = styled.i`
  margin: 10px 0 0;
  font-size: 30px;

  &.fa-smile {
    color: #008dca;
  }

  &.fa-frown {
    color: #d60000;
  }
`;
