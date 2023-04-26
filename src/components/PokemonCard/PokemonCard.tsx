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

  useEffect(() => {
    const fetchPokemonSpec = async () => {
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

  const checkImage = () => {
    if (data?.sprites.other.dream_world.front_default) {
      return data.sprites.other.dream_world.front_default
    } else {
      return alternativeImg
    }
  }

  return (
    <PokemonCardContainer>
      {data ? <PokemonCardImage src={checkImage()} alt={data.name} loading='lazy'/> : <SkeletonLoading />}
    </PokemonCardContainer>
  )
}
