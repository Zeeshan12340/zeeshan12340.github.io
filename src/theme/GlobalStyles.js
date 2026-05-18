import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background: #1e1e2d;
  }
  body {
    margin: 0;
    min-height: 100vh;
    background: var(--bg-gradient);
    background-attachment: fixed;
    color: ${({ theme }) => theme.color};
  }
`;

export default GlobalStyles;
