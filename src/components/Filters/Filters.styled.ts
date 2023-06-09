import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const FiltersContainer = styled.div`
  margin: auto;
  padding: ${(props) => props.theme.spacing[4]} 0;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[1]} 0;
  align-items: center;

  @media ${device['tablet']} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    padding: ${(props) => props.theme.spacing[4]} ${(props) => props.theme.spacing[3]};
  }

  @media ${device['desktop']} {
    padding: ${(props) => props.theme.spacing[4]} 0;
  }
`
