import {useEffect, useState} from 'react'
import axios from 'axios';

interface PokemonType {
    name: string
    url: string
  }

export  function getTypeFilter(apiEndpoint : string) {
    const [types, setTypes] = useState<PokemonType[]>([])

    useEffect(() => {
        const fetchTypes = async () => {
          try {
            const typesResponse = await axios.get(apiEndpoint)
            setTypes(typesResponse.data.results)
          } catch {
            setTypes([])
          }
        }
    
        fetchTypes()
      }, [apiEndpoint])

      return types
}
