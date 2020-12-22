import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  padding: 15px;
  width: 230px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  box-shadow: rgba(14, 14, 14, 0.15) 0px 10px 20px 0px;
  transform: scale(1.02) translate(0px, -6px);
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 20px;
  background-color: ${({ color }) => color || "transparent"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: #fff;
  font-weigth: bold;
`;

export const Title = styled.h5`
  margin: 0 0 10px;
  font-size: 18px;
`;

export const MinutesFree = styled.p`
  font-size: 14px;
`;
