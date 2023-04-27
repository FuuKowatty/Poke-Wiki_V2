import { SkeletonLoading, PokemonCardContainer, PokemonCardImage } from './PokemonCard.styled'
import alternativeImg from 'assets/default_image.svg'
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

  const handleImageLoad = () =>  {
    setIsLoading(false)
  }

  const setAlternativeImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    img.src = alternativeImg;
  }

  const checkImage = () => {
    if(data?.sprites.other.dream_world.front_default === null) {
      return alternativeImg
    } else {
      return data?.sprites.other.dream_world.front_default
    }
  }

  return (
    <PokemonCardContainer>
      {isLoading && <SkeletonLoading />}
      <PokemonCardImage
        src={checkImage()}
        alt={name}
        onLoad={handleImageLoad}
        onError={setAlternativeImg}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </PokemonCardContainer>
  )
}
