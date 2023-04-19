import { StyledCard, StyledCardImg } from 'styles/PokemonTypes'
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

export function PokeCard({ url }: { url: string }) {
  const [data, setData] = useState<null | PokemonSpecs>(null)

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

  if (!data) {
    return <>siema</>
  }

  const checkImage = () => {
    if (data.sprites.other.dream_world.front_default) {
      return data.sprites.other.dream_world.front_default
    } else {
      return 'https://www.svgrepo.com/show/276264/pokeball-pokemon.svg'
    }
  }

  return (
    <StyledCard>
      <StyledCardImg src={checkImage()} alt={data.name} />
    </StyledCard>
  )
}
