import { SkeletonLoading, PokemonCardContainer, PokemonCardImage } from '../Card.styled'
import alternativeImg from 'assets/default_image.svg'
import { CardInterface } from 'components/CardInterface/CardInterface'
import { Name } from 'components/CardInterface/CardInterface.styled'
import { handleAddFavorite } from 'utils/handleLocalStorage'
import { useEffect, useState } from 'react'

interface PokemonSpecs {
  name: string
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

interface PokemonSpecs {
  name: string
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
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

  const handleAddFavoritePokemon = () => handleAddFavorite('pokemon', name);

  return (
    <PokemonCardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading && <SkeletonLoading />}
      <PokemonCardImage
        src={checkImage()}
        alt={name}
        onLoad={handleImageLoad}
        onError={setAlternativeImg}
        style={{ display: isLoading || !data ? 'none' : 'block' }}
      />
      {data && !isLoading && <CardInterface isHovered={isHovered} handleAddFavorite={handleAddFavoritePokemon} name={name} />} 
      <Name>{name}</Name>
    </PokemonCardContainer>
  )
}
