import { device } from 'utils/breakpoints'
import { createGlobalStyle } from 'styled-components'



export const GlobalStyles = createGlobalStyle`

    body {
        color: ${(props) => props.theme.colors.primary};
        background: ${(props) => props.theme.colors.bodyBg};
        font-family: Roboto, sans-serif;
        font-size: ${(props) => props.theme.size['md']};
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
