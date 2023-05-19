import { calculateContentPerPage } from 'utils/calculateMeasures'
import { useEffect, useState } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const contentPerPage = calculateContentPerPage(width);

  return { browserWidth: width, isMobile: width < 620, isTablet: width<1024, contentPerPage }
}
