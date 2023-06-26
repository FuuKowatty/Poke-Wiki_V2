import { useViewportContext } from 'context/ViewportContext/ViewportProvider'
import { useMemo, useState } from 'react'

const DOTS = '...'

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
  isPaginationVisible: boolean
}

function generateUniqueId() {
  const uniqueId = Math.random().toString(36).substring(2)
  return uniqueId
}

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = <T,>(data: T[]): UsePaginationReturn<T> => {
  const firstPageIndex = 1; 
  const pageSize = 20
  const isPaginationVisible = data.length > pageSize
  const [currentPage, setCurrentPage] = useState(1)
  const totalPageCount = Math.ceil(data.length / pageSize)
  const { isMobile } = useViewportContext()
  const siblingCount = isMobile ? 0 : 2

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;
  
    if (totalPageNumbers >= totalPageCount) {
      return generateFullRange(totalPageCount);
    }
  
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
  
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
  
    if (!shouldShowLeftDots && shouldShowRightDots) {
      return generateRightDotsRange(siblingCount, totalPageCount);
    }
  
    if (shouldShowLeftDots && !shouldShowRightDots) {
      return generateLeftDotsRange(siblingCount, totalPageCount, firstPageIndex);
    }
  
    if (shouldShowLeftDots && shouldShowRightDots) {
      return generateMiddleRange(leftSiblingIndex, rightSiblingIndex, firstPageIndex, totalPageCount);
    }
  
    return [];
  }, [data.length, pageSize, siblingCount, currentPage]);
  

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize

    return data.slice(startIndex, endIndex)
  }, [currentPage, data, pageSize])

  const onPageChange = (pageNumber: number) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setCurrentPage(pageNumber)
  }

  const onNext = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const onPrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  return {
    paginationRange,
    currentPage,
    currentData,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
    isPaginationVisible,
  }
}

const generateFullRange = (totalPageCount:number) => {
  return range(1, totalPageCount).map((pageNumber) => ({
    id: generateUniqueId(),
    pageNumber,
  }));
};

const generateRightDotsRange = (siblingCount:number, totalPageCount:number) => {
  const leftItemCount = 3 + 2 * siblingCount;
  const leftRange = range(1, leftItemCount).map((pageNumber) => ({
    id: generateUniqueId(),
    pageNumber,
  }));

  return [
    ...leftRange,
    { id: generateUniqueId(), pageNumber: DOTS },
    { id: generateUniqueId(), pageNumber: totalPageCount },
  ];
};

const generateLeftDotsRange = (siblingCount:number, totalPageCount:number, firstPageIndex:number) => {
  const rightItemCount = 3 + 2 * siblingCount;
  const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount).map(
    (pageNumber) => ({
      id: generateUniqueId(),
      pageNumber,
    }),
  );

  return [
    { id: generateUniqueId(), pageNumber: firstPageIndex },
    { id: generateUniqueId(), pageNumber: DOTS },
    ...rightRange,
  ];
};

const generateMiddleRange = (leftSiblingIndex:number, rightSiblingIndex:number, firstPageIndex:number, lastPageIndex:number) => {
  const middleRange = range(leftSiblingIndex, rightSiblingIndex).map((pageNumber) => ({
    id: generateUniqueId(),
    pageNumber,
  }));

  return [
    { id: generateUniqueId(), pageNumber: firstPageIndex },
    { id: generateUniqueId(), pageNumber: DOTS },
    ...middleRange,
    { id: generateUniqueId(), pageNumber: DOTS },
    { id: generateUniqueId(), pageNumber: lastPageIndex },
  ];
};