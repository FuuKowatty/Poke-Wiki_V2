import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const FiltersContainer = styled.div`
  padding: ${theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]} 0;
  justify-content: space-between;
  align-items: center;

  @media ${device['tablet']} {
    flex-direction: row;
  }
`
