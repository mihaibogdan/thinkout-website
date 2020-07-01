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
    line-height: 1.74;
    color: ${({ theme }) => theme.palette.neutral.grey};
  }

  :root {
    --mdc-theme-primary: ${({ theme }) => theme.palette.primary.main};
    --mdc-theme-secondary: ${({ theme }) => theme.palette.neutral.grey};
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
