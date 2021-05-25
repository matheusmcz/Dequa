import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --softGreen: #136773;
    --gray: #F8F8F8;
    --purpleDark: #59274D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    @font-face {
      font-family: 'September';
      src: url('./assets/googleSeptember2015Regular.ttf');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Helvetica';
      src: url('./assets/helvetica.ttf');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Helvetica-Bold';
      src: url('./assets/helveticaBold.ttf');
      font-weight: 700;
      font-style: normal;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'September', sans-serif;
  }

`;
