import { TooltipContent } from './Tooltip.styled';


interface TooltipProps {
    position: 'top' | 'bottom';
    children: string
  }

export function Tooltip({ position, children } : TooltipProps) {
    return <TooltipContent position={position}>{children}</TooltipContent>
  };