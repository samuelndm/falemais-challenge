import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 30px;

  @media screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      width: 100%;
    }
  }

  & .css-1wa3eu0-placeholder {
    font-size: 13px;
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
