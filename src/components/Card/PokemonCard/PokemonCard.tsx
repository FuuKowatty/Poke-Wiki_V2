import { SkeletonLoading, CardContainer, PokemonCardImage } from '../Card.styled'
import alternativeImg from 'assets/default_image.svg'
import { CardInterface } from 'components/CardInterface/CardInterface'
import { useFavorites } from 'hooks/useFavorites'
import { useEffect, useState } from 'react'

interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

interface AbilityInfo {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

interface statsInfo {
  base_stat: number
  effor: number
  stat: {
    name: string
  }
}

interface MoveVersionGroupDetails {
  level_learned_at: number
  move_learn_method: {
    name: string
    url: string
  }
  version_group: {
    name: string
    url: string
  }
}

interface Move {
  name: string
  url: string
}

export interface MoveData {
  move: Move
  version_group_details: MoveVersionGroupDetails[]
}

export interface PokemonSpecs {
  id: number
  abilities: AbilityInfo[]
  base_experience: number
  height: number
  name: string
  types: PokemonType[]
  weight: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  stats: statsInfo[]
  moves: MoveData[]
}

export function PokemonCard({ name }: { name: string }) {
  const [data, setData] = useState<null | PokemonSpecs>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchPokemonSpec = async () => {
      setIsLoading(true)
      try {
        const PokemonSpec = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const PokemonSpecJson = await PokemonSpec.json()
        setData(PokemonSpecJson)
      } catch {
        console.log('blad pokemonSpec')
      }
    }

    fetchPokemonSpec()
  }, [])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const setAlternativeImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    img.src = alternativeImg
  }

  const checkImage = () => {
    if (data?.sprites.other.dream_world.front_default === null) {
      return alternativeImg
    } else {
      return data?.sprites.other.dream_world.front_default
    }
  }

  const { handleAddFavorite } = useFavorites()
  const handleAddFavoritePokemon = () => handleAddFavorite('pokemon', name)

  return (
    <CardContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isLoading && <SkeletonLoading />}
      <PokemonCardImage
        src={checkImage()}
        alt={name}
        onLoad={handleImageLoad}
        onError={setAlternativeImg}
        style={{ display: isLoading || !data ? 'none' : 'block' }}
      />
      {data && !isLoading && (
        <CardInterface
          isHovered={isHovered}
          handleAddFavorite={handleAddFavoritePokemon}
          name={name}
        />
      )}
    </CardContainer>
  )
}
