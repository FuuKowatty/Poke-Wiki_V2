import {
  PokemonDetailImage,
  PokemonDetailsContainer,
  PokemonStatsContainer,
  DetailsHeader,
} from './PokemonDetail.styled'
import { MoveData, PokemonSpecs } from 'components/Card/PokemonCard/PokemonCard'
import { LoadingState } from 'components/common/LoadingState/LoadingState'
import { PokemonMoves } from 'components/PokemonMoves'
import { PokemonStats } from 'components/PokemonStats'
import { PokemonTable } from 'components/PokemonTable'
import { checkDescription, checkHabitat } from 'utils/checkData'
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

export interface iconTypesProps {
  name: string
  url: string
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
  const iconsUrl = 'http://localhost:3000/results'
  const [pokemonData, setPokemonData] = useState<PokemonSpecs | null>(null)
  const [pokemonSpecies, setPokemonSpecies] = useState<pokemonSpeciesProps | null>(null)
  const [iconTypes, setIconTypes] = useState<iconTypesProps[] | null>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const sliceArray = (arr: MoveData[]) => {
    const linksArr = arr.map((move) => move.move.url)
    const slicedLinksArr = linksArr.slice(0, 5)

    return slicedLinksArr
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          fetch(pokemonLink),
          fetch(pokemonSpeciesLink),
          fetch(iconsUrl),
        ])
        const [data1, data2, data3] = await Promise.all([
          response1.json(),
          response2.json(),
          response3.json(),
        ])
        await setPokemonData(data1)
        await setPokemonSpecies(data2)
        await setIconTypes(data3)
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
    <LoadingState isLoading={isLoading}>
      <PokemonDetailsContainer>
        <PokemonDetailImage src={pokemonData?.sprites.other.dream_world.front_default} />
        <DetailsHeader>{pokemonData?.name}</DetailsHeader>
        <PokemonStatsContainer>
          {pokemonData && (
            <>
              <PokemonStats stats={pokemonData.stats} />
              {iconTypes && pokemonSpecies && (
                <PokemonTable
                  data={pokemonData}
                  icons={iconTypes}
                  habitat={checkHabitat(pokemonSpecies.habitat)}
                />
              )}
            </>
          )}
        </PokemonStatsContainer>
        {pokemonData && <PokemonMoves linksArr={sliceArray(pokemonData.moves)} />}
        {pokemonSpecies && <>desc: {checkDescription(pokemonSpecies.flavor_text_entries)}</>}
      </PokemonDetailsContainer>
    </LoadingState>
  )
}
