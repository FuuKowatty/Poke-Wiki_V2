import { LAPTOP_WIDTH, TABLET_WIDTH } from 'utils/breakpoints'
import { useEffect, useState } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const browserWidth = width
  const isMobile = width < TABLET_WIDTH
  const isTablet = width < LAPTOP_WIDTH && width >= TABLET_WIDTH

  return { browserWidth, isMobile, isTablet }
}
