import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[2]};

  @media ${device['desktop']} {
    grid-column: 7 / span 6;
    grid-row: 2 / span 3;
  }
`

export const BarContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing[1]};
  font-size: ${(props) => props.theme.size['xl']};
  width: 100%;
`

export const BarStats = styled.div`
  position relative;
  flex: 1;
  border: 1px solid ${(props) => props.theme.colors['primary']};
`

export const ProgressBar = styled.span<{ width: string; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ color }) => color};
  width: ${({ width }) => width};
  height: 100%;
  z-index: 1;
`

export const InfoStatContainer = styled.div`
  position: relative;
  min-width: 90px;
`

export const TotalDivider = styled.span`
  height: 3px;
  width: 100%;
  background: ${(props) => props.theme.colors['darkerBlue']};
`

export const TotalParagraph = styled.p`
  text-align: left;
  margin: 0;
  width: 100%;
  font-size: ${(props) => props.theme.size['lg']};
`
