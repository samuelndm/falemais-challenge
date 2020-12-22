import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
