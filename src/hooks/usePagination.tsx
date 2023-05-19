import { useViewport } from './useViewport'
import { useCallback, useMemo, useState } from 'react'

const DOTS = '...'

interface UsePaginationParams<T> {
  data: T[]
  pageSize: number
}

interface PaginationRangeItem {
  id: string
  pageNumber: number | string
}

interface UsePaginationReturn<T> {
  paginationRange: PaginationRangeItem[]
  currentPage: number
  currentData: T[]
  onPageChange: (pageNumber: number) => void
  onNext: () => void
  onPrevious: () => void
  totalPageCount: number
}

function generateUniqueId(): string {
  const uniqueId = Math.random().toString(36).substring(2)
  return uniqueId
}

const range = (start: number, end: number): number[] => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export function usePagination<T>({
  data,
  pageSize,
}: UsePaginationParams<T>): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPageCount = Math.ceil(data.length / pageSize)
  const { isMobile } = useViewport()
  const siblingCount = isMobile ? 0 : 2

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount).map((pageNumber) => ({
        id: generateUniqueId(),
        pageNumber,
      }))
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount).map((pageNumber) => ({
        id: generateUniqueId(),
        pageNumber,
      }))

      return [
        ...leftRange,
        { id: generateUniqueId(), pageNumber: DOTS },
        { id: generateUniqueId(), pageNumber: totalPageCount },
      ]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount).map(
        (pageNumber) => ({
          id: generateUniqueId(),
          pageNumber,
        }),
      )

      return [
        { id: generateUniqueId(), pageNumber: firstPageIndex },
        { id: generateUniqueId(), pageNumber: DOTS },
        ...rightRange,
      ]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex).map((pageNumber) => ({
        id: generateUniqueId(),
        pageNumber,
      }))

      return [
        { id: generateUniqueId(), pageNumber: firstPageIndex },
        { id: generateUniqueId(), pageNumber: DOTS },
        ...middleRange,
        { id: generateUniqueId(), pageNumber: DOTS },
        { id: generateUniqueId(), pageNumber: lastPageIndex },
      ]
    }

    return []
  }, [data.length, pageSize, siblingCount, currentPage])

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize

    return data.slice(startIndex, endIndex)
  }, [currentPage, data, pageSize])

  const onPageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber)
  }, [])

  const onNext = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1)
  }, [])

  const onPrevious = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1)
  }, [])

  return {
    paginationRange,
    currentPage,
    currentData,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
  }
}
