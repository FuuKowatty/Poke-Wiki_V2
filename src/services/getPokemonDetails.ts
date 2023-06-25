import {useEffect, useState} from 'react';

interface pokemonSpeciesProps {
    habitat: {
      name: string
    } | null
    flavor_text_entries: FlavorText[]
  }

export function getPokemonDetails(name: string) {
    const pokemonLink = `https://pokeapi.co/api/v2/pokemon/${name}`
    const pokemonSpeciesLink = `https://pokeapi.co/api/v2/pokemon-species/${name}`

    const [pokemonData, setPokemonData] = useState<PokemonSpecs | null>(null)
    const [pokemonSpecies, setPokemonSpecies] = useState<pokemonSpeciesProps | null>(null)
    
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

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

      const data = pokemonData && pokemonSpecies ? {...pokemonData, ...pokemonSpecies} : null

      return { data, isLoading, error }
}
