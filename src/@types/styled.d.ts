// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bodyBg: string;
      darkerBlue: string;
      darkBlue: string;
      standsOut: string;
      bannerColor: string;
      grayGradient: string;
    }
    size: {
      '4xl': string;
      '3xl': string;
      '2xl': string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    }
    spacing: {
      '5': string;
      '4': string;
      '3': string;
      '2': string;
      '1': string;
    },
    round: {
      lg: string;
      md: string;
    }
  }
}
