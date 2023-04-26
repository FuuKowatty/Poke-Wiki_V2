import { Pagination } from 'components/Pagination/Pagination'
import { LoadingState } from 'components/common/LoadingState/LoadingState'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { GridContainer } from 'styles/globalComponents'
import { Filters } from 'components/Filters/Filters'
import { NoDataInfo } from 'components/common/NoDataInfo/NoDataInfo'
import { useEffect, useRef } from 'react'

interface state {
    data: unknown;
    isLoading: boolean;
    error: Error | undefined;
}

interface PaginationRangeItem {
    id: string
    pageNumber: number | string
  }

interface pagination {
    currentData: unknown;
    paginationRange: PaginationRangeItem[]
    currentPage: number
    onPageChange: (page: number) => void
    onPrevious: () => void
    onNext: () => void
    totalPageCount: number
    show?: boolean
}



interface PokemonBuildPageProps {
    children: React.ReactNode;
    state: state;
    pagination: pagination;
} 


export function PokemonBuildPage({children, state, pagination} : PokemonBuildPageProps) {

  const {isLoading, error} = state
  const {currentData, currentPage, paginationRange, onPageChange, onNext, onPrevious, totalPageCount, show} = pagination

  const gridContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (gridContainerRef.current) {
      const { offsetTop } = gridContainerRef.current
      gridContainerRef.current.style.minHeight = `calc(100vh - ${offsetTop}px - 120px)`
    }
  }, [])

  return (
    <>
      <Filters />
      <GridContainer ref={gridContainerRef}>
        <LoadingState isLoading={isLoading}>
            {children}
        </LoadingState>
        {error && <FetchError />}
      </GridContainer>
      {show && (
        Array.isArray(currentData) && currentData.length > 0 && !error ? (
                <Pagination
                  paginationRange={paginationRange}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                  onNext={onNext}
                  onPrevious={onPrevious}
                  totalPageCount={totalPageCount}
                />
              ) : (
                !isLoading && <NoDataInfo />
              )
      )}
    </>
  )
}
