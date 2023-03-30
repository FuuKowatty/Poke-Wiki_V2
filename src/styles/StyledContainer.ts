import { Theme } from './Theme'
import styled from 'styled-components'

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1440px;
    max-width: 100%;
`

export const IconButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: ${Theme.colors.primary};
    font-size: ${Theme.fonts.headerThree};
`
export const SearchIcon = styled(IconButton)`
    font-size: ${Theme.fonts.normal};
`