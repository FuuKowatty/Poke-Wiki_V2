import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        color: ${theme.colors['primary']};
        background: ${theme.colors['bodyBg']};
        font-family: Roboto, sans-serif;
        font-size: ${theme.size['md']};
        padding: 0;
        padding-bottom: 50px;
        margin: 0;

        @media ${device.laptop} {
            padding-bottom: 0;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
      }
`
