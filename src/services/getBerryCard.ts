import { checkErrorType } from 'utils/checkData'
import {useEffect, useState} from 'react'

interface Sprites {
    default: string
  }
  
interface BerryItemSpec {
    category: Category
    cost: number
    name: string
    sprites: Sprites
  }

  interface BerryProps {
    firmness: Firmness
    flavors: Flavor[]
    growth_time: number
    item: {
      url: string
    }
  }

export function getBerryCard(url: string) {

    const [dataSpec, setDataSpec] = useState<null | BerryProps>(null)
    const [dataItemSpec, setDataItemSpec] = useState<null | BerryItemSpec>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        const fetchBerrySpec = async () => {
          setIsLoading(true)
          try {
            const BerriesSpecs = await fetch(url)
            const BerriesSpecsJson = await BerriesSpecs.json()
            setDataSpec(BerriesSpecsJson)
          } catch (error) {
            setIsLoading(false)
            setError( checkErrorType(error).message )
          }
        }
    
        fetchBerrySpec()
      }, [])
    
      useEffect(() => {
        if (dataSpec) {
          const fetchBarryItemSpec = async () => {
            try {
              const BerriesSpecs = await fetch(dataSpec.item.url)
              const BerriesSpecsJson = await BerriesSpecs.json()
              setDataItemSpec(BerriesSpecsJson)
            } catch (error) {
              setIsLoading(false)
              if (error instanceof Error) setError(error.message)
            }
          }
    
          fetchBarryItemSpec()
        }
      }, [dataSpec])

      const handleLoad = () => {
        setIsLoading(false)
      }

      const data = dataItemSpec && dataSpec ? {...dataSpec, ...dataItemSpec} : null

  return {data, isLoading, handleLoad,error}
}
