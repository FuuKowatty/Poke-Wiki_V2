import { Button } from 'styles/Banner'
import { Theme } from 'styles/Theme'
import { useState, useEffect } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { MdErrorOutline } from 'react-icons/md'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface LoadingStateProps {
  isLoading: boolean
  error: Error | undefined
  children: React.ReactNode
}

// position of parent have to be relative

export function LoadingState({ children, error, isLoading }: LoadingStateProps) {
  const [loadingText, setLoadingText] = useState('loading')
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading || error) {
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

  if (isLoading || error) {
    return (
      <LoadingContainer>
        {isLoading && (
          <>
            <LoadingIcon />
            <LoadingText>{loadingText}</LoadingText>
          </>
        )}
        {error && (
          <>
            <ErrorIcon />
            <LoadingText>Unable to load the data</LoadingText>
            <Button onClick={() => navigate('/')}>BACK TO HOME</Button>
          </>
        )}
      </LoadingContainer>
    )
  }

  return <>{children}</>
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const LoadingIcon = styled(AiOutlineLoading)`
  animation: ${spin} 1s linear infinite;
  font-size: ${Theme.fonts.headerTwo};
`

const ErrorIcon = styled(MdErrorOutline)`
  color: ${Theme.colors.standsOut};
  font-size: ${Theme.fonts.headerTwo};
`

const LoadingText = styled.p`
  margin: 10px 0;
  font-size: ${Theme.fonts.headerFour};
`
