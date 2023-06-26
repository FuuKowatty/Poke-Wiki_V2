export const TABLET_WIDTH = 620;
export const LAPTOP_WIDTH = 1024;
export const DESKTOP_WIDTH = 1440;

export const size = {
  tablet: `${TABLET_WIDTH}px`,
  laptop: `${LAPTOP_WIDTH}px`,
  desktop: `${DESKTOP_WIDTH}px`,
} as const

export const device = {
  tablet: `(min-width: ${size['tablet']})`,
  laptop: `(min-width: ${size['laptop']})`,
  desktop: `(min-width: ${size['desktop']})`,
} as const
