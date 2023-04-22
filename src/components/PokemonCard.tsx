import { SkeletonLoading, StyledCard, StyledCardImg } from 'styles/PokemonTypes'
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

export function PokemonCard({ url }: { url: string }) {
  const [data, setData] = useState<null | PokemonSpecs>(null)
  const alternativeImg = 'https://www.svgrepo.com/show/276264/pokeball-pokemon.svg'

  useEffect(() => {
    const fetchPokemonSpec = async () => {
      try {
        const PokemonSpec = await fetch(url)
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
    <StyledCard>
      {data ? <StyledCardImg src={checkImage()} alt={data.name} /> : <SkeletonLoading />}
    </StyledCard>
  )
}
