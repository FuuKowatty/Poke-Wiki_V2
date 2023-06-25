import {
  StatsContainer,
  BarContainer,
  BarStats,
  InfoStatContainer,
  ProgressBar,
  TotalDivider,
  TotalParagraph,
} from './Stats.styled'
import { calculateProgressWidth, calculateTotalStats } from 'utils/calculateMeasures'
import { PokemonStats as Stats } from 'data/data'

interface StatsProps {
  name: string
  color: string
  icon: JSX.Element
}



export const getStatAccessories = (arr: StatsProps[], name: string) => {
  return arr.find((accessory) => accessory.name === name)
}

export function PokemonStats({ stats }: { stats: StatsInfo[] }) {
  return (
    <StatsContainer>
      {stats.map((stat) => {
        const statAccessories = getStatAccessories(Stats, stat.stat.name)
        if (!statAccessories) {
          return null
        }

        return (
          <BarContainer key={stat.stat.name}>
            <InfoStatContainer>
              {statAccessories.icon} - {stat.base_stat}
            </InfoStatContainer>
            <BarStats>
              <ProgressBar
                width={calculateProgressWidth(255, stat.base_stat)}
                color={statAccessories.color}
              />
            </BarStats>
          </BarContainer>
        )
      })}
      <TotalDivider />
      <TotalParagraph>Total: {calculateTotalStats(stats)}</TotalParagraph>
    </StatsContainer>
  )
}
