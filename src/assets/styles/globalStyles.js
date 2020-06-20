import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 1.74;
    color: ${({ theme }) => theme.palette.neutral.grey};
  }

  body.video-open {
    overflow: hidden;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  ::selection {
    color: ${({ theme }) => theme.palette.neutral.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  strong {
    font-weight: 500;
  }
`;

export default GlobalStyle;
