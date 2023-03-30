import { Theme } from 'styles/Theme';
import { createGlobalStyle } from 'styled-components';



export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        color: ${Theme.colors.primary};
        background: ${Theme.colors.bodyBg};
        font-family: Roboto, sans-serif;
        font-size: ${Theme.fonts.normal}
    }
`;