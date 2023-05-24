import { Pagination } from 'components/Pagination/Pagination'
import { GridContainer } from 'styles/globalComponents'
import { Filters } from 'components/Filters/Filters'
import { useEffect, useRef } from 'react'

interface PaginationRangeItem {
  id: string
  pageNumber: number | string
}

interface pagination {
  paginationRange: PaginationRangeItem[]
  currentPage: number
  onPageChange: (page: number) => void
  onPrevious: () => void
  onNext: () => void
  totalPageCount: number
  isPaginationVisible: boolean
}

interface PokemonBuildPageProps {
  children: React.ReactNode
  pagination: pagination
  isBerryPage?: boolean
}

export function PokemonBuildPage({
  children,
  pagination,
  isBerryPage = false,
}: PokemonBuildPageProps) {
  const {
    currentPage,
    paginationRange,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
    isPaginationVisible,
  } = pagination

  // calculate min height of grid container to put pagination on bottom
  const gridContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (gridContainerRef.current) {
      const { offsetTop } = gridContainerRef.current
      gridContainerRef.current.style.minHeight = `calc(100vh - ${offsetTop}px - 100px)`
    }
  }, [])

  return (
    <>
      <Filters isBerryPage={isBerryPage} />
      <GridContainer ref={gridContainerRef}>{children}</GridContainer>
      {isPaginationVisible && (
        <Pagination
          paginationRange={paginationRange}
          currentPage={currentPage}
          onPageChange={onPageChange}
          onNext={onNext}
          onPrevious={onPrevious}
          totalPageCount={totalPageCount}
        />
      )}
    </>
  )
}
