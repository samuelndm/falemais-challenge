import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 173px;
  height: auto;
  max-height: 38px;

  @media screen and (max-width: 768px) {
    width: 130px;
  }

  @media screen and (max-width: 575px) {
    width: 100px;
  }
`;
