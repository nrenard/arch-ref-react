import { createGlobalStyle } from 'styled-components';

import typographyStyle from './typographyStyle';

export default createGlobalStyle`
  ${typographyStyle};

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline: 0;
    font-family: ${(props) => props.theme.fontFamily};
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    color: ${(props) => props.theme.colors.body};
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.bodyBackgrond};
  }

  img {
    max-width: 100%;
  }
`;
