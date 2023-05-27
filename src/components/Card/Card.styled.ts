import { device } from 'utils/breakpoints'
import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 32/38;
  background: ${(props) => props.theme.colors.bannerColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.round['md']};
  box-shadow: 0 12px 8px rgba(0, 0, 0, 0.1);

  @media ${device['desktop']} {
    max-height: 399px;
  }
`

export const ErrorMessageContainer = styled.div`
  width: 80%;
  margin: auto;
`

export const CardImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: ${(props) => props.theme.spacing[4]};
  box-sizing: border-box;

  @media ${device['tablet']} {
    padding: ${(props) => props.theme.spacing[5]};
  }
`

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

export const SkeletonLoading = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, #003367, #123049);
  background-size: 400% 400%;
  animation: ${shimmer} 1s ease-out forwards infinite;
`
