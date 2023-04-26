import { LoadingIcon } from './LoadingState.styled'
import { CenteredContainer, InfoParagraph } from 'styles/globalComponents'
import { useState, useEffect } from 'react'

interface LoadingStateProps {
  isLoading: boolean
  children: React.ReactNode
}

// position of parent have to be relative
export function LoadingState({ children, isLoading }: LoadingStateProps) {
  const [loadingText, setLoadingText] = useState('loading')

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingText((prev) => (prev === 'loading...' ? 'loading' : prev + '.'))
    }, 500)

    return () => clearInterval(timer)
  }, [])

  if (isLoading) {
    return (
      <CenteredContainer>
        {isLoading && (
          <>
            <LoadingIcon />
            <InfoParagraph>{loadingText}</InfoParagraph>
          </>
        )}
      </CenteredContainer>
    )
  }

  return <>{children}</>
}
