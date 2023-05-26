import { IconButton } from 'styles/globalComponents'
import styled from 'styled-components'

export const PaginationContainer = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.spacing[1]};
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: ${(props) => props.theme.spacing[2]} 0 ${(props) => props.theme.spacing[5]} 0;
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
  font-size: ${(props) => props.theme.size['md']};
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors['secondary']};
  border-radius: ${(props) => props.theme.round['md']};
  cursor: pointer;
  display: ${({ disabled }) => (disabled ? 'none' : 'block')};

  &:hover {
    background: ${(props) => props.theme.colors['standsOut']};
    color: ${(props) => props.theme.colors['darkBlue']};
  }
`

export const PaginationButtonActive = styled(PaginationButtonNumber)`
  background: ${(props) => props.theme.colors['standsOut']};
  color: ${(props) => props.theme.colors['darkerBlue']};
`
