import { theme } from 'styles/theme'
import {AiFillHome} from 'react-icons/ai'
import {MdCatchingPokemon, MdFavorite} from 'react-icons/md'
import {GiStrawberry} from 'react-icons/gi'
import styled from 'styled-components'

export function MobileMenu() {
  return (
    <MobileMenuContainer>
        <MobileMenuIconContainer>
            <AiFillHome/>
        </MobileMenuIconContainer>
        <MobileMenuIconContainer>
            <MdCatchingPokemon/>
        </MobileMenuIconContainer>
        <MobileMenuIconContainer>
            <GiStrawberry/>
        </MobileMenuIconContainer>  
        <MobileMenuIconContainer>
            <MdFavorite/>
        </MobileMenuIconContainer>
    </MobileMenuContainer>
  )
}


const MobileMenuContainer = styled.div`
    border-top: 1px solid ${theme.colors['darkerBlue']};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: ${theme.spacing['4']};
    background-color: ${theme.colors['bodyBg']};
    justify-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: ${theme.size['xl']};
    z-index: 999;
`

const MobileMenuIconContainer = styled.span`
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`