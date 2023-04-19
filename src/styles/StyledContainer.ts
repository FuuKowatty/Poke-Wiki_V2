import { Theme } from './Theme'
import styled from 'styled-components'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  max-width: 100%;
`

export const IconButton = styled.button`
  color: ${Theme.colors.primary};
  cursor: pointer;
  border: none;
  background: none;
  font-size: ${Theme.fonts.headerThree};
`
