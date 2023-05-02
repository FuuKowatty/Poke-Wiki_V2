import { IconButton } from 'styles/globalComponents'
import { theme } from 'styles/theme'
import styled from 'styled-components'

export const PaginationContainer = styled.ul`
  display: flex;
  gap: ${theme.spacing[1]};
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: ${theme.spacing[2]} 0 ${theme.spacing[5]} 0;
`

export const PaginationButton = styled(IconButton)`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: end;
  justify-content: center;
  cursor: auto;
`

export const PaginationButtonNumber = styled(PaginationButton)`
  font-size: ${theme.size['md']};
  align-items: center;
  border: 1px solid ${theme.colors['secondary']};
  border-radius: ${theme.spacing[1]};
  cursor: pointer;
  display: ${({ disabled }) => (disabled ? 'none' : 'block')};

  &:hover {
    background: ${theme.colors['standsOut']};
    color: ${theme.colors['darkBlue']};
  }
`

export const PaginationButtonActive = styled(PaginationButtonNumber)`
  background: ${theme.colors['standsOut']};
  color: ${theme.colors['darkerBlue']};
`
