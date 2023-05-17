import { BarContainer, BarStats, ProgressBar } from 'pages/Pokemons/PokemonDetail.styled'
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

export function PokemonStats({ data }: { data: any }) {
  return (
    <>
      {data.stats.map((stat: any) => {
        const statAccesories = Stats.filter((accesories) => accesories.name === stat.stat.name)
        const statX = { ...statAccesories[0] }
        return (
          <BarContainer key={stat.stat.name}>
            {statX.icon} - {stat.base_stat}
            <BarStats>
              <ProgressBar width={calculateProgressWidth(stat.base_stat)} color={statX.color} />
            </BarStats>
          </BarContainer>
        )
      })}
      <p>Total: {data.stats.reduce((acc: any, stat: any) => acc + stat.base_stat, 0)}</p>
    </>
  )
}

function calculateProgressWidth(width: number) {
  return (width / 255) * 100 + '%'
}
