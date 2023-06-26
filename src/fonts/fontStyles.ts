import GolosTTF from './Golos/Golos-Text_Bold.ttf';
import GolosWoff from './Golos/Golos-Text_Bold.woff';
import RobotoTTF from './Roboto/Roboto-Regular.ttf';
import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src:  url(${RobotoTTF}) format('truetype');
    }

    @font-face {
        font-family: 'Golos-Text';
        font-style: normal;
        font-weight: bold;
        src: url(${GolosTTF}) format('truetype'),
             url(${GolosWoff}) format('woff');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
