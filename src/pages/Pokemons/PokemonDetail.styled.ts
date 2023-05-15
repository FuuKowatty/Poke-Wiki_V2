import { PokemonCardImage } from 'components/Card/Card.styled';
import { theme } from 'styles/theme';
import styled from 'styled-components';


export const PokemonDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`
export const PokemonDetailImage = styled(PokemonCardImage)`
    height: 300px;
`

export const PokemonStatsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing['2']};
`

export const BarContainer = styled.div`
    display: flex;
    gap: ${theme.spacing['1']};
    font-size: ${theme.size['xl']};
`

export const BarStats = styled.div`
    position relative;
    display: flex;
    align-items: center;
    width: 250px;
    padding: ${theme.spacing['1']} 0;
    border: 1px solid ${theme.colors['primary']};
    color: ${theme.colors['primary']};
`

export const ProgressBar = styled.span<{width: string; color: string; }>`
    position: absolute;
    top: 0;
    left: 0;
    background: ${({color}) => color};
    width: ${({width}) => width};
    height: 100%;
    z-index: -1;
`