import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

interface PaginationArgs {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}

interface paginationElement {
  pageNumber: number | string
  id: string
}

interface PaginationObject {
  paginationRange: Array<paginationElement>
  onPageChange: (number: number) => void
  onNext: () => void
  onPrevious: () => void
}

export const DOTS = '...'

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

const generateUniqueId = (): string => {
  return crypto.randomUUID()
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationArgs): PaginationObject => {
  const paginationRange: Array<paginationElement> = useMemo(() => {
    const lastPageIndex = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= lastPageIndex) {
      return range(1, lastPageIndex).map((pageNumber) => ({ pageNumber, id: generateUniqueId() }))
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex)

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < lastPageIndex - 2

    const firstPageIndex = 1

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount).map((pageNumber) => ({
        pageNumber,
        id: generateUniqueId(),
      }))

      return [
        ...leftRange,
        { pageNumber: DOTS, id: generateUniqueId() },
        { pageNumber: lastPageIndex, id: generateUniqueId() },
      ]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(lastPageIndex - rightItemCount + 1, lastPageIndex).map(
        (pageNumber) => ({ pageNumber, id: generateUniqueId() }),
      )
      return [
        { pageNumber: firstPageIndex, id: generateUniqueId() },
        { pageNumber: DOTS, id: generateUniqueId() },
        ...rightRange,
      ]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex).map((pageNumber) => ({
        pageNumber,
        id: generateUniqueId(),
      }))
      return [
        { pageNumber: firstPageIndex, id: generateUniqueId() },
        { pageNumber: DOTS, id: generateUniqueId() },
        ...middleRange,
        { pageNumber: DOTS, id: generateUniqueId() },
        { pageNumber: lastPageIndex, id: generateUniqueId() },
      ]
    }

    return []
  }, [totalCount, pageSize, siblingCount, currentPage])

  const navigate = useNavigate()

  const changePage = (number: number) => {
    navigate(`/types?page=${number}`)
  }

  const onPageChange = (number: number) => {
    if (number < 1 || number > Math.ceil(totalCount / pageSize)) return
    changePage(number)
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return {
    paginationRange,
    onPageChange,
    onNext,
    onPrevious,
  }
}
