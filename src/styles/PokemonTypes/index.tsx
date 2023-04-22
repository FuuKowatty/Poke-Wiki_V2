import { Theme } from 'styles/Theme'
import { device } from 'styles/Breakpoints'
import { IconButton } from 'styles/StyledContainer'
import styled, { keyframes } from 'styled-components'

export const StyledPokemonTypes = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(1, auto);
  padding: ${Theme.spacing[3]};
  position: relative;
  gap: ${Theme.spacing[3]};

  @media ${device.desktop} {
    grid-template-columns: repeat(4, auto);
  }
`
export const StyledCard = styled.div`
  height: 400px;
  width: 335px;
  background: ${Theme.colors.bannerColor};
  display: flex;
  align-items: center;
`

export const StyledCardImg = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: ${Theme.spacing[5]};
  box-sizing: border-box;
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

export const StyledPagination = styled.ul`
  display: flex;
  gap: ${Theme.spacing[1]};
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: ${Theme.spacing[3]};
`
export const StyledListItem = styled.li``

export const PaginationButton = styled(IconButton)`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: end;
  justify-content: center;
  cursor: auto;
`

export const PaginationButtonNumber = styled(PaginationButton)`
  font-size: ${Theme.fonts.normal};
  align-items: center;
  border: 1px solid ${Theme.colors.secondary};
  border-radius: ${Theme.spacing[1]};
  cursor: pointer;
  display: ${({ disabled }) => (disabled ? 'none' : 'block')};

  &:hover {
    background: ${Theme.colors.standsOut};
    color: ${Theme.colors.darkerBlue};
  }
`

export const PaginationButtonActive = styled(PaginationButtonNumber)`
  background: ${Theme.colors.standsOut};
  color: ${Theme.colors.darkerBlue};
`
