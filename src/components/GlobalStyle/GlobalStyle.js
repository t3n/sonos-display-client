import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes noise {
    from {
      background-position: 0px -800px;
    }

    to {
      background-position: 800px 0;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: adelle-sans,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(https://d1quwwdmdfumn6.cloudfront.net/t3n/2018/images/hero/t3n_pixel.png) 0 0 repeat, ${({
      theme
    }) => theme.colors.background};
    background-size: calc(1440px / 3) calc(450px / 3);
    color: ${({ theme }) => theme.colors.primary};
    animation: noise 1s steps(10, end) infinite;
    font-size: 28px;    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
