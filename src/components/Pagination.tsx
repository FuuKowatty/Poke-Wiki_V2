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
  onPageChange: (numb: number) => void
}

export function Pagination({ contentPerPage, count, currentPage, onPageChange }: Pagination) {
  const { isMobile } = useAppContext()

  const paginationRange = usePagination({
    currentPage: currentPage,
    totalCount: count,
    siblingCount: isMobile ? 0 : 2,
    pageSize: contentPerPage,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <StyledPagination>
      <StyledListItem>
        <PaginationButtonNumber onClick={() => onPrevious()}>
          <MdArrowBack />
        </PaginationButtonNumber>
      </StyledListItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS && typeof pageNumber === 'string') {
          return (
            <StyledListItem key={pageNumber}>
              <PaginationButton>&#8230;</PaginationButton>
            </StyledListItem>
          )
        } else {
          return (
            <>
              {pageNumber === currentPage ? (
                <StyledListItem key={pageNumber}>
                  <PaginationButtonActive>{pageNumber}</PaginationButtonActive>
                </StyledListItem>
              ) : (
                <StyledListItem key={pageNumber}>
                  <PaginationButtonNumber onClick={() => onPageChange(pageNumber as number)}>
                    {pageNumber}
                  </PaginationButtonNumber>
                </StyledListItem>
              )}
            </>
          )
        }
      })}
      <StyledListItem>
        <PaginationButtonNumber onClick={() => onNext()}>
          <MdArrowForward />
        </PaginationButtonNumber>
      </StyledListItem>
    </StyledPagination>
  )
}
