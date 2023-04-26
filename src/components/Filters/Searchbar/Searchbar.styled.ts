import { IconButton } from 'styles/globalComponents'
import { theme } from 'styles/theme'
import styled from 'styled-components'

export const SearchbarForm = styled.form`
  position: relative;
  display: flex;
  min-width: 275px;
  gap: ${theme.spacing[1]};
  max-width: 320px;
  height: 35px;
`

export const SearchbarInput = styled.input`
  padding: ${theme.spacing[2]};
  color: ${theme.colors['secondary']};
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  background: ${theme.colors['primary']};
  border-top-left-radius: ${theme.spacing[1]};
  border-bottom-left-radius: ${theme.spacing[1]};
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
  border-top-right-radius: ${theme.spacing[1]};
  border-bottom-right-radius: ${theme.spacing[1]};
`
