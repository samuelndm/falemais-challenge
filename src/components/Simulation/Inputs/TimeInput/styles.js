import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 30px;
  width: 10%;

  @media screen and (max-width: 991px) {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h4`
  margin: 0 auto 10px;
  text-align: center;

  @media screen and (max-width: 991px) {
    margin: 0 10px 0 0;
    width: 100px;
    font-size: 13px;
  }

  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 0 0 0 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  min-height: 38px;
  outline: 0 !important;

  &:focus {
    border-color: hsl(0, 0%, 70%);
  }
`;
