import { theme } from 'styles/theme';
import styled from 'styled-components';

export const StatsContainer = styled.div`
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
  width: 100%;
`

export const BarStats = styled.div`
    position relative;
    flex: 1;
    border: 1px solid ${theme.colors['primary']};
`

export const ProgressBar = styled.span<{ width: string; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ color }) => color};
  width: ${({ width }) => width};
  height: 100%;
  z-index: -1;
`

export const InfoStatContainer = styled.div`
  min-width: 90px;
`