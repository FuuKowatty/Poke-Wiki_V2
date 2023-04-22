import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type PageNavigationProps = {
  defaultPage?: number
  totalPages: number
}

export const usePageNavigation = ({ defaultPage = 1, totalPages }: PageNavigationProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const page = searchParams.get('page')

    if (page) {
      const numberOfPage = parseInt(page)

      if (numberOfPage && numberOfPage <= totalPages && numberOfPage >= 1) {
        return
      } else {
        if (!isNaN(numberOfPage)) {
          const nextPage = Math.min(Math.max(numberOfPage, 1), totalPages)
          navigate(`?page=${nextPage}`)
        } else {
          navigate(`?page=${defaultPage}`)
        }
      }
    } else {
      navigate(`?page=${defaultPage}`)
    }
  }, [defaultPage, location.search, navigate, totalPages])
}
