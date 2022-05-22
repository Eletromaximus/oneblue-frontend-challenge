import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    text-decoration: none;

    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  div, #root {
    display: flex;
    height: 100%;
  }
`
export { GlobalStyle }
