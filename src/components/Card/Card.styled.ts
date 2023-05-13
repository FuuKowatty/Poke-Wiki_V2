import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: 320px;
  aspect-ratio: 32/38;
  background: ${theme.colors['bannerColor']};
  display: flex;
  align-items: center;

  @media ${device['tablet']} {
    max-width: 300px;
  }

  @media ${device['laptop']} {
    max-width: 320px;
  }

  @media ${device['desktop']} {
    max-width: 100%;
  }
`

export const PokemonCardImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: ${theme.spacing[4]};
  box-sizing: border-box;

  @media ${device['laptop']} {
    padding: ${theme.spacing[5]};
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
