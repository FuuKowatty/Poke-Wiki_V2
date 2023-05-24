import { theme } from 'styles/theme';
import styled from 'styled-components';

export const TooltipContent = styled.div<{ position: 'top' | 'bottom' }>`
  display: ${({ children }) => (children ? 'block' : 'none')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  border-radius: 4px;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.2s;

  ${({ position }) =>
    position === 'top'
      ? `
    bottom: calc(100% + 8px);
  `
      : `
    top: calc(100% + 8px);
  `}
`;
