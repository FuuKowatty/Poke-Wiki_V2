import { Pagination } from 'components/Pagination/Pagination'
import { LoadingState } from 'components/common/LoadingState/LoadingState'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { GridContainer } from 'styles/globalComponents'
import { NoDataInfo } from 'components/common/NoDataInfo/NoDataInfo'
import { Filters } from 'components/Filters/Filters'
import { useEffect, useRef } from 'react'

interface state {
  data: unknown
  isLoading: boolean
  error: Error | undefined
}

interface PaginationRangeItem {
  id: string
  pageNumber: number | string
}

interface pagination {
  currentData: unknown
  paginationRange: PaginationRangeItem[]
  currentPage: number
  onPageChange: (page: number) => void
  onPrevious: () => void
  onNext: () => void
  totalPageCount: number
}

interface PokemonBuildPageProps {
  children: React.ReactNode
  state: state
  pagination: pagination
  isPaginationVisible?: boolean
  isBerryPage?: boolean
}

export function PokemonBuildPage({
  children,
  state,
  pagination,
  isPaginationVisible = true,
  isBerryPage = false,
}: PokemonBuildPageProps) {
  const { isLoading, error } = state
  const {
    currentData,
    currentPage,
    paginationRange,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
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
      {isBerryPage ? (
        <Filters
          queryRoute='/berries/search?query='
          typeRoute='/berries'
          apiEndpoint='https://pokeapi.co/api/v2/berry-firmness/'
        />
      ) : (
        <Filters
          queryRoute='/pokemons/search?query='
          typeRoute='/pokemons'
          apiEndpoint='https://pokeapi.co/api/v2/type/'
        />
      )}
      <GridContainer ref={gridContainerRef}>
        <LoadingState isLoading={isLoading}>{children}</LoadingState>
        {error && <FetchError />}
      </GridContainer>
      {isPaginationVisible &&
        (Array.isArray(currentData) && currentData.length > 0 && !error ? (
          <Pagination
            paginationRange={paginationRange}
            currentPage={currentPage}
            onPageChange={onPageChange}
            onNext={onNext}
            onPrevious={onPrevious}
            totalPageCount={totalPageCount}
          />
        ) : (
          !isLoading && !error && <NoDataInfo />
        ))}
    </>
  )
}
