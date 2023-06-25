import { useEffect, useState } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const browserWidth = width
  const isMobile = width < 620
  const isTablet = width < 1024 && width >= 620

  return { browserWidth, isMobile, isTablet }
}
