import { IconButton } from 'styles/globalComponents'
import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const SearchbarForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  gap: ${theme.spacing[1]};
  height: 40px;

  @media ${device['tablet']} {
    width: 280px;
  }

  @media ${device['laptop']} {
    width: 350px;
    height: 45px;
  }

`

export const SearchbarInput = styled.input`
  padding: ${theme.spacing[2]};
  color: ${theme.colors['secondary']};
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  background: ${theme.colors['primary']};
  border-top-left-radius: 8px;;
  border-bottom-left-radius: 8px;
`

export const SearchIcon = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.size['lg']};
  padding: 0 ${theme.spacing[2]};
  background: ${theme.colors['standsOut']};
  height: 100%;
  color: ${theme.colors['darkerBlue']};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`
