import { LoadingIcon } from './LoadingState.styled'
import { CenteredContainer, InfoParagraph } from 'styles/globalComponents'
import { useState, useEffect } from 'react'

// position of parent have to be relative
export function LoadingState() {
  const [loadingText, setLoadingText] = useState('loading')

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingText((prev) => (prev === 'loading...' ? 'loading' : prev + '.'))
    }, 500)

    return () => clearInterval(timer)
  }, [])

    return (
      <CenteredContainer>
            <LoadingIcon />
            <InfoParagraph>{loadingText}</InfoParagraph>
      </CenteredContainer>
    )
  }


