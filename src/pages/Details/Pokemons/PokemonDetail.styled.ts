import { PokemonCardImage } from 'components/Card/Card.styled'
import { theme } from 'styles/theme'
import { Name } from 'components/CardInterface/CardInterface.styled'
import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 ${theme.spacing['4']};
`
export const PokemonDetailImage = styled(PokemonCardImage)`
  height: 300px;
`

export const DetailsHeader = styled.h1`
  text-align: center;
`

export const DetailsName = styled(Name)`
  top: 90%;
`

export const ImageContainer = styled.div`
  position: relative;
`
export const DescContainer = styled.div``