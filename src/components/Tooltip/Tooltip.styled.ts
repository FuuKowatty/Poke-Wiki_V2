import styled from 'styled-components'

export const TooltipContent = styled.div<{ position: 'top' | 'bottom' }>`
  display: ${({ children }) => (children ? 'block' : 'none')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.round['md']};
  z-index: 1;
  opacity: 1;
  transition: opacity 0.2s;
  text: center;
  width: max-content;
  white-space: nowrap;

  ${({ position }) =>
    position === 'top'
      ? `
    bottom: calc(100% + 8px);
  `
      : `
    top: calc(100% + 8px);
  `}
`
