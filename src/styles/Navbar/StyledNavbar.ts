import { Theme } from 'styles/Theme'
import styled from 'styled-components'

interface Props {
    isMobile: boolean
}

export const StyledNavbar = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.isMobile ? Theme.spacing[2] : Theme.spacing[4]}
    
`

export const StyledLogo = styled.div`
    font-weight: 900;
    font-family: 'Golos Text', sans-serif;
    font-size: ${Theme.fonts.headerTwo};
`

export const StyledSearch = styled.form`
    position: relative;
    align-items: center;
    justify-content: space-between;
    background: ${Theme.colors.primary};
    display: flex;
    border-radius: 4px;
    color: ${Theme.colors.secondary};
    padding: 0 ${Theme.spacing[2]}
`

export const StyledInput = styled.input`
    padding: ${Theme.spacing[2]};
    color: ${Theme.colors.secondary};
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    fonr-size: ${Theme.fonts.normal};
    outline: none;
    opacity: .5;

    &:focus {
        opacity: 1;
    }
`