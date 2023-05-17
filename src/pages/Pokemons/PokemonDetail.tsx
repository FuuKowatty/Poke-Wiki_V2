import {
  BarContainer,
  BarStats,
  PokemonDetailImage,
  PokemonDetailsContainer,
  PokemonStatsContainer,
  ProgressBar,
  DetailsHeader,
  DetailsHeaderContainer, 
  DetailsTypeImage} from './PokemonDetail.styled'
import { MoveData, PokemonSpecs } from 'components/Card/PokemonCard/PokemonCard'
import { LoadingState } from 'components/common/LoadingState/LoadingState'
import { JakMoveDetails } from 'hooks/useMoveDetails'
import { PokemonStats } from 'components/PokemonStats'
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
  name: string;
}



interface iconTypesProps {
  name: string
  url: string
}

interface flavor_text {
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
  flavor_text_entries: flavor_text[]
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

  const types = pokemonData?.types.map((type) => type.type.name)
  const filteredIconTypes = iconTypes?.filter((iconType) => types?.includes(iconType.name))

  return (
    <PokemonDetailsContainer>
      <LoadingState isLoading={isLoading}>
        <div>
        <DetailsHeaderContainer>
            <DetailsHeader>{pokemonData?.name}</DetailsHeader>
          </DetailsHeaderContainer>
          <PokemonDetailImage src={pokemonData?.sprites.other.dream_world.front_default} />
          
          <PokemonStatsContainer>
            {pokemonData && (
              <>
              <PokemonStats data={pokemonData}/>

                {calculateWeight(pokemonData.weight) + ' ' + calculateHeight(pokemonData.height)}
              </>
            )}
          </PokemonStatsContainer>
          {filteredIconTypes?.map((icon) => (
              <DetailsTypeImage src={icon.url} alt={icon.name} key={icon.name} />
            ))}
          {pokemonData && <JakMoveDetails linksArr={sliceArray(pokemonData.moves)} />}

          {pokemonSpecies && (
            <>
              habitat: {pokemonSpecies.habitat ? pokemonSpecies.habitat.name : 'NO DATA'}
              desc: {checkDescription(pokemonSpecies.flavor_text_entries)}
            </>
          )}
        </div>
        <div></div>
      </LoadingState>
    </PokemonDetailsContainer>
  )
}

function sliceArray(arr: MoveData[]) {
  const linksArr = arr.map((move) => move.move.url)
  const slicedLinksArr = linksArr.slice(0, 5)

  return slicedLinksArr
}

function calculateWeight(weight: number) {
  return weight / 10 + 'kg'
}

function calculateHeight(height: number) {
  return height / 10 + 'm'
}


function checkDescription(descriptionsArr: flavor_text[]) {
  const description = descriptionsArr.find((desc) => desc.language.name === 'en')
  return description ? description.flavor_text : 'NO DATA'
}

