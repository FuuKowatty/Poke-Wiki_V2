import { usePagination, DOTS } from 'hooks/usePagination'
import {
  StyledListItem,
  StyledPagination,
  PaginationButton,
  PaginationButtonActive,
  PaginationButtonNumber,
} from 'styles/PokemonTypes'
import { useAppContext } from 'hooks/useAppContext'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

interface Pagination {
  contentPerPage: number
  count: number
  currentPage: number
}

export function Pagination({ contentPerPage, count, currentPage }: Pagination) {
  const { isMobile } = useAppContext()

  const { paginationRange, onPageChange, onNext, onPrevious } = usePagination({
    currentPage: currentPage,
    totalCount: count,
    siblingCount: isMobile ? 0 : 2,
    pageSize: contentPerPage,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <StyledPagination>
      <StyledListItem>
        <PaginationButtonNumber
          disabled={currentPage === 1 ? true : false}
          onClick={() => onPrevious()}
        >
          <MdArrowBack />
        </PaginationButtonNumber>
      </StyledListItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber.pageNumber === DOTS && typeof pageNumber.pageNumber === 'string') {
          return (
            <StyledListItem key={pageNumber.id}>
              <PaginationButton disabled>&#8230;</PaginationButton>
            </StyledListItem>
          )
        } else {
          return (
            <StyledListItem key={pageNumber.id}>
              {pageNumber.pageNumber === currentPage ? (
                <PaginationButtonActive>{pageNumber.pageNumber}</PaginationButtonActive>
              ) : (
                <PaginationButtonNumber
                  onClick={() => onPageChange(pageNumber.pageNumber as number)}
                >
                  {pageNumber.pageNumber}
                </PaginationButtonNumber>
              )}
            </StyledListItem>
          )
        }
      })}
      <StyledListItem>
        <PaginationButtonNumber
          disabled={currentPage === 65 ? true : false}
          onClick={() => onNext()}
        >
          <MdArrowForward />
        </PaginationButtonNumber>
      </StyledListItem>
    </StyledPagination>
  )
}
