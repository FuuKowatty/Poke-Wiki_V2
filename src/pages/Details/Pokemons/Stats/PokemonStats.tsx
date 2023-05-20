import { BarContainer, BarStats, InfoStatContainer, ProgressBar, StatsContainer } from './Stats.styled'
import { statsInfo } from '../../../../components/Card/PokemonCard/PokemonCard'
import { calculateProgressWidth, calculateTotalStats } from 'utils/calculateMeasures'
import { GiRabbit } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbSword } from 'react-icons/tb'
import { FiShield } from 'react-icons/fi'
import { SlMagicWand } from 'react-icons/sl'
import { RiEyeOffLine } from 'react-icons/ri'

const Stats = [
  {
    name: 'hp',
    color: '#FF3E3E',
    icon: <AiOutlineHeart />,
  },
  {
    name: 'attack',
    color: '#FFA500',
    icon: <TbSword />,
  },
  {
    name: 'defense',
    color: '#00FF7F',
    icon: <FiShield />,
  },
  {
    name: 'special-attack',
    color: '#9400D3',
    icon: <SlMagicWand />,
  },
  {
    name: 'special-defense',
    color: '#0080FF',
    icon: <RiEyeOffLine />,
  },
  {
    name: 'speed',
    color: '#FFFF00',
    icon: <GiRabbit />,
  },
]

export function PokemonStats({ stats }: { stats: statsInfo[] }) {
  const getStatAccessories = (name: string) => {
    return Stats.find((accessory) => accessory.name === name)
  }

  return (
    <StatsContainer>
      <h2>STATS</h2>
      {stats.map((stat) => {
        const statAccessories = getStatAccessories(stat.stat.name)
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
                width={calculateProgressWidth(stat.base_stat)}
                color={statAccessories.color}
              />
            </BarStats>
          </BarContainer>
        )
      })}
      <p>Total: {calculateTotalStats(stats)}</p>
    </StatsContainer>
  )
}
