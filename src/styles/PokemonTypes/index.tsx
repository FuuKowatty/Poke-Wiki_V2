import { Theme } from 'styles/Theme'
import { device } from 'styles/Breakpoints'
import { IconButton } from 'styles/StyledContainer'
import styled from 'styled-components'

export const StyledPokemonTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  width: 100%;

  @media ${device.desktop} {
    grid-template-columns: repeat(4, auto);
  }
`
export const StyledCard = styled.div`
  height: 400px;
  background: ${Theme.colors.bannerColor};
  padding: 0 50px;
`

export const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
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

  &:hover {
    background: ${Theme.colors.standsOut};
    color: ${Theme.colors.darkerBlue};
  }
`

export const PaginationButtonActive = styled(PaginationButtonNumber)`
  background: ${Theme.colors.standsOut};
  color: ${Theme.colors.darkerBlue};
`
