import { Pagination } from 'components/Pagination/Pagination'
import { GridContainer, SpanText } from 'styles/globalComponents'
import { Filters } from 'components/Filters/Filters'

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
  query?: string
  type?: string
}

export function PokemonBuildPage({
  children,
  pagination,
  isBerryPage = false,
  query,
  type,
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



  return (
    <>
      <Filters isBerryPage={isBerryPage} onPageChange={pagination.onPageChange} />
      {(query || type) && <SpanText>You searched for <strong>{query ?? (type + ' type')}</strong></SpanText>}
      <GridContainer>{children}</GridContainer>
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
