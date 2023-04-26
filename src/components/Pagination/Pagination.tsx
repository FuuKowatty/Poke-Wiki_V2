import {
  PaginationButton,
  PaginationButtonNumber,
  PaginationContainer,
  PaginationButtonActive,
} from './Pagination.styled'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

interface PaginationRangeItem {
  id: string
  pageNumber: number | string
}

interface PaginationProps {
  paginationRange: PaginationRangeItem[]
  currentPage: number
  onPageChange: (page: number) => void
  onPrevious: () => void
  onNext: () => void
  totalPageCount: number
}

export function Pagination({
  paginationRange,
  currentPage,
  onPageChange,
  onNext,
  onPrevious,
  totalPageCount
}: PaginationProps) {
  return (
    <PaginationContainer>
      <li>
        <PaginationButtonNumber
          disabled={currentPage === 1 ? true : false}
          onClick={() => onPrevious()}
        >
          <MdArrowBack />
        </PaginationButtonNumber>
      </li>
      {paginationRange.map((item) => {
        if (item.pageNumber === '...' && typeof item.pageNumber === 'string') {
          return (
            <li key={item.id}>
              <PaginationButton disabled>&#8230;</PaginationButton>
            </li>
          )
        } else {
          return (
            <li key={item.id}>
              {item.pageNumber === currentPage ? (
                <PaginationButtonActive>{item.pageNumber}</PaginationButtonActive>
              ) : (
                <PaginationButtonNumber onClick={() => onPageChange(item.pageNumber as number)}>
                  {item.pageNumber}
                </PaginationButtonNumber>
              )}
            </li>
          )
        }
      })}
      <li>
        <PaginationButtonNumber
          disabled={currentPage === totalPageCount ? true : false}
          onClick={() => onNext()}
        >
          <MdArrowForward />
        </PaginationButtonNumber>
      </li>
    </PaginationContainer>
  )
}
