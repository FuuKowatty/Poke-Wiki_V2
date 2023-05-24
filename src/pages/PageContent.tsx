import { FetchError } from 'components/common/FetchErrors/FetchError'
import { LoadingState } from 'components/common/LoadingState/LoadingState'
import { NoDataInfo } from 'components/common/NoDataInfo/NoDataInfo'

interface PageContentProps {
  state: {
    currentData: unknown[]
    isLoading: boolean
    error: Error | undefined
  }
  children: React.ReactNode
}

export function PageContent({ state, children }: PageContentProps) {
  const { currentData, isLoading, error } = state

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : Array.isArray(currentData) && currentData.length > 0 ? (
        children
      ) : (
        <NoDataInfo />
      )}
      {error && <FetchError />}
    </>
  )
}
