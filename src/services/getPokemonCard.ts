import { useEffect, useState } from 'react'

export function getPokemonCard(name : string) {

    const [data, setData] = useState<null | PokemonSpecs>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        const fetchPokemonSpec = async () => {
          setIsLoading(true)
          try {
            const PokemonSpec = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const PokemonSpecJson = await PokemonSpec.json()
            setData(PokemonSpecJson)
          } catch (error) {
            setIsLoading(false)
            if (error instanceof Error) setError(error.message)
          }
        }
    
        fetchPokemonSpec()
      }, [])
    
      const handleLoad = () => {
        setIsLoading(false)
      }

      return { data, isLoading, error, handleLoad }
}
