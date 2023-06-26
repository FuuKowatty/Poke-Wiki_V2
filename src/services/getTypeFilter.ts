import {useEffect, useState} from 'react'

interface PokemonType {
    name: string
    url: string
  }
  
  interface TypesResponse {
    results: PokemonType[]
  }

export  function getTypeFilter(apiEndpoint : string) {
    const [types, setTypes] = useState<PokemonType[]>([])

    useEffect(() => {
        const fetchTypes = async () => {
          try {
            const typesResponse = await fetch(apiEndpoint)
            const typesJson: TypesResponse = await typesResponse.json()
            setTypes(typesJson.results)
          } catch {
            setTypes([])
          }
        }
    
        fetchTypes()
      }, [apiEndpoint])

      return types
}
