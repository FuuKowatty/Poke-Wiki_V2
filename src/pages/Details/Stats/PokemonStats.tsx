import { StatsContainer, TotalDivider, TotalParagraph } from './Stats.styled'
import { StatisticBar } from './StatisticBar'
import { calculateTotalStats } from 'utils/calculateMeasures'
import { PokemonStats as Stats } from 'data/data'
import React from 'react'

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
          <React.Fragment key={stat.stat.name}>
            <StatisticBar {...statAccessories} stat={stat} />
          </React.Fragment>
        )
      })}
      <TotalDivider />
      <TotalParagraph>Total: {calculateTotalStats(stats)}</TotalParagraph>
    </StatsContainer>
  )
}
