import { CardImage } from 'components/Card/Card.styled'
import { theme } from 'styles/theme'
import { Name } from 'components/Card/CardInterface/CardInterface.styled'
import { device, size } from 'utils/breakpoints'
import { IconButton } from 'styles/globalComponents'
import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['5']};
  padding: 0 ${theme.spacing['4']};
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;

  @media ${device['tablet']} {
    max-width: 450px;
  }

  @media ${device['laptop']} {
    grid-template-columns: repeat(2, 1fr);
    max-width: ${size['laptop']};
    padding: 0 ${theme.spacing['5']};
  }

  @media ${device['desktop']} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(9, 90px);
    max-width: ${size['desktop']};
    gap: ${theme.spacing['2']};
  }
`


export const ImageContainer = styled.div`
  position: relative;
  background: ${theme.colors['bannerColor']};
  border: 5px solid ${theme.colors['standsOut']};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device['laptop']} {
    border: none;
    background: transparent;
  }

  @media ${device['desktop']} {
    grid-column: 2 / span 4;
    grid-row: 1 / span 5;
  }
`

export const DescContainer = styled.div`
  width: 100%;
  background: ${theme.colors['bannerColor']};
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${theme.spacing['3']};
  border-radius: 8px;

  @media ${device['desktop']} {
    grid-column: 7 / span 2;
    grid-row: 6 / span 3;
  }
`

export const PokemonDetailImage = styled(CardImage)`
  @media ${device['tablet']} {
    width: 80%;
    padding: ${theme.spacing[2]};
  }

  @media ${device['desktop']} {
    width: 100%;
  }
`

export const DetailsHeader = styled.h1`
  font-size: ${theme.size['xl']};
  text-align: center;
`

export const DetailsName = styled(Name)`
  top: 85%;
  width: auto;
`

export const EvolutionsContainer = styled.div`
  background: ${theme.colors['grayGradient']};

  @media ${device['desktop']} {
    grid-column: 9 / span 4;
    grid-row: 6 / span 3;
  }
`

export const BackIconDetails = styled(IconButton)`
  font-size: ${theme.size['2xl']};
  padding: ${theme.spacing[3]};

  @media ${device['laptop']} {
    position: absolute;
  }
`
