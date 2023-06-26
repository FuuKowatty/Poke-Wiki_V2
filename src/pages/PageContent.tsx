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

  let content;

  if (isLoading) {
    content = <LoadingState />;
  } else if (currentData.length > 0) {
    content = children;
  } else {
    content = <NoDataInfo />;
  }

  return (
    <>
      {content}
      {error && <FetchError />}
    </>
  );
}
