import { BarContainer, BarStats, PokemonDetailImage, PokemonDetailsContainer, PokemonStatsContainer, ProgressBar } from './PokemonDetail.styled';
import { PokemonSpecs } from 'components/Card/PokemonCard/PokemonCard';
import { useFetch } from 'hooks/useFetch'
import { useParams } from 'react-router-dom'
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
    
  }
]

export function PokemonDetail() {
    const { name } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const {data, isLoading, error} = useFetch<PokemonSpecs>(url);

  return (
    <PokemonDetailsContainer>
      <div>
        <PokemonDetailImage src={data?.sprites.other.dream_world.front_default}/>
        <PokemonStatsContainer>
          {!isLoading && data && (
            data.stats.map(stat => {
              const statAccesories = Stats.filter(accesories => accesories.name === stat.stat.name);
              const statX = {...statAccesories[0]};

              return(
                <BarContainer key={stat.stat.name}>
                {statX.icon}
                  <BarStats>
                    <ProgressBar width={(stat.base_stat / 255) * 100 + '%'} 
                    color={statX.color} />
                      
                  </BarStats>
                </BarContainer>
              )
            })
          )}
        </PokemonStatsContainer>
      <div>   

        </div> 
        </div>
      <div></div>
    </PokemonDetailsContainer>
  )
}
