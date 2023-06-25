import { BarContainer, BarStats, InfoStatContainer, ProgressBar } from './Stats.styled'
import { Tooltip } from 'components/Tooltip/Tooltip'
import { calculateProgressWidth } from 'utils/calculateMeasures'
import {useState} from 'react'

interface StatisticBarProps {
  name: string
  color: string
  icon: JSX.Element
  stat: StatsInfo
}


export function StatisticBar({name, color, icon, stat}: StatisticBarProps) {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <BarContainer key={name} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <InfoStatContainer>
        {icon} - {stat.base_stat}
        {isHovered && <Tooltip position='top'>{`${stat.stat.name} - ${stat.base_stat}`}</Tooltip>} 
      </InfoStatContainer>
      <BarStats>
        <ProgressBar
          width={calculateProgressWidth(255, stat.base_stat)}
          color={color}
        />
      </BarStats>

    </BarContainer>
  )
}
