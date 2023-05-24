import {
  DetailsName,
  ImageContainer,
  PokemonDetailImage,
  DetailsContainer,
  DescContainer,
  DetailsHeader,
  EvolutionsContainer,
} from './PokemonDetail.styled'
import { MoveData, PokemonSpecs } from 'components/Card/PokemonCard/PokemonCard'
import { LoadingState } from 'components/common/LoadingState/LoadingState'
import { checkDescription, checkHabitat } from 'utils/checkData'
import { PokemonMoves } from 'pages/Details/Moves/PokemonMoves'
import { PokemonStats } from 'pages/Details/Stats/PokemonStats'
import { PokemonTable } from 'pages/Details/Table/PokemonTable'
import { checkImage, setAlternativeImg } from 'utils/imageUtils'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export interface moveDetailsProps {
  accuracy: number | null
  damage_class: {
    name: string | null
  }
  power: number | null
  type: {
    name: string | null
  }
  meta: {
    crit_rate: number | null
    drain: number | null
    healing: number | null
  }
  name: string
}

export interface flavorText {
  flavor_text: string
  language: {
    name: string
    url: string
  }
}

interface pokemonSpeciesProps {
  habitat: {
    name: string
  } | null
  flavor_text_entries: flavorText[]
}

export function PokemonDetail() {
  const { name } = useParams()
  const pokemonLink = `https://pokeapi.co/api/v2/pokemon/${name}`
  const pokemonSpeciesLink = `https://pokeapi.co/api/v2/pokemon-species/${name}`
  const [pokemonData, setPokemonData] = useState<PokemonSpecs | null>(null)
  const [pokemonSpecies, setPokemonSpecies] = useState<pokemonSpeciesProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const sliceArray = (arr: MoveData[]) => {
    const linksArr = arr.map((move) => move.move.url)
    const slicedLinksArr = linksArr.slice(0, 5)

    return slicedLinksArr
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(pokemonLink),
          fetch(pokemonSpeciesLink),
        ])
        const [data1, data2] = await Promise.all([response1.json(), response2.json()])
        await setPokemonData(data1)
        await setPokemonSpecies(data2)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
        if (err instanceof Error) {
          setError(err.message)
        }
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {error && <FetchError />}
      {isLoading && <LoadingState />}
      {!isLoading && pokemonData && pokemonSpecies && (
        <DetailsContainer>
          <ImageContainer>
            <PokemonDetailImage
              src={checkImage(pokemonData.sprites.other.dream_world.front_default)}
              onError={setAlternativeImg}
            />
            <DetailsName>{pokemonData.name}</DetailsName>
          </ImageContainer>
          <PokemonStats stats={pokemonData.stats} />
          <PokemonTable
            data={pokemonData}
            habitat={checkHabitat(pokemonSpecies.habitat)}
            types={pokemonData.types}
          />
          <PokemonMoves linksArr={sliceArray(pokemonData.moves)} />
          <DescContainer>
            <DetailsHeader>Description</DetailsHeader>
            {checkDescription(pokemonSpecies.flavor_text_entries)}
          </DescContainer>
          <EvolutionsContainer />
        </DetailsContainer>
      )}
    </>
  )
}
