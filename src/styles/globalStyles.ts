import { theme } from 'styles/theme'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        color: ${theme.colors['primary']};
        background: ${theme.colors['bodyBg']};
        font-family: Roboto, sans-serif;
        font-size: ${theme.size['md']};
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
      }
`
