import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input, textarea {
        border: 0;
        outline: 0;
        font-family: Raleway, sans-serif;
        line-height: 20px;
    }

    :root {
        --primary-color: #2D348D;
        --secondary-color: #efedf3;
    }

`;

export const PageContainer = styled.div`
  margin: 76px 0 0;
  width: 100%;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media (min-width: 480px) {
    max-width: 728px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
