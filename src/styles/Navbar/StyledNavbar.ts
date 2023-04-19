import { Theme } from 'styles/Theme'
import { device } from 'styles/Breakpoints'
import { IconButton } from 'styles/StyledContainer'
import styled from 'styled-components'

export const StyledNavbar = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${Theme.spacing[2]} ${Theme.spacing[4]};

  @media ${device.tablet} {
    padding: ${Theme.spacing[4]};
    justify-content: space-between;
  }
`

export const StyledLogo = styled.div`
  font-weight: 900;
  font-family: 'Golos Text', sans-serif;
  font-size: ${Theme.fonts.headerTwo};
`

export const StyledLogoImage = styled.img`
  width: 48px;
  height: 48px;
`

export const StyledSearch = styled.form`
  position: relative;
  display: flex;
  min-width: 275px;
  gap: ${Theme.spacing[1]};
  height: 35px;
`

export const StyledInput = styled.input`
  padding: ${Theme.spacing[2]};
  color: ${Theme.colors.secondary};
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  background: ${Theme.colors.primary};
  border-top-left-radius: ${Theme.spacing[1]};
  border-bottom-left-radius: ${Theme.spacing[1]};
`

export const SearchIcon = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Theme.fonts.headerFour};
  padding: 0 ${Theme.spacing[2]};
  background: ${Theme.colors.standsOut};
  height: 100%;
  color: ${Theme.colors.darkerBlue};
  border-top-right-radius: ${Theme.spacing[1]};
  border-bottom-right-radius: ${Theme.spacing[1]};
`
