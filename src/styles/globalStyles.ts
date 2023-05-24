import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${theme.colors['primary']};
        background: ${theme.colors['bodyBg']};
        font-family: Roboto, sans-serif;
        font-size: ${theme.size['md']};
        padding-bottom: 50px;

        @media ${device.laptop} {
            padding-bottom: 0;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
      }
`
