import { theme } from 'styles/theme'
import { AiOutlineLoading } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoadingIcon = styled(AiOutlineLoading)`
  animation: ${spin} 1s linear infinite;
  font-size: ${theme.size['2xl']};
`
