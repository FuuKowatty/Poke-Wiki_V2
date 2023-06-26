import { checkErrorType } from 'utils/checkData'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function getPokemonCard(name : string) {

    const [data, setData] = useState<null | PokemonSpecs>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        const fetchPokemonSpec = async () => {
          setIsLoading(true)
          try {
            const PokemonSpec = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            setData(PokemonSpec.data)
          } catch (error) {
            setIsLoading(false)
            setError(checkErrorType(error).message)
          }
        }
    
        fetchPokemonSpec()
      }, [])
    
      const handleLoad = () => {
        setIsLoading(false)
      }

      return { data, isLoading, error, handleLoad }
}
