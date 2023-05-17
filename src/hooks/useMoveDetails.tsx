import { moveDetailsProps } from 'pages/Pokemons/PokemonDetail'
import { useEffect, useState } from 'react'

interface props {
  linksArr: string[]
}

export function JakMoveDetails({ linksArr }: props) {
  const [moveDetails, setMoveDetails] = useState<moveDetailsProps[] | null>(null)
  useEffect(() => {
    const fetchMoveDetails = async () => {
      try {
        const responses = await Promise.all(linksArr.map((link) => fetch(link)))
        const data = await Promise.all(responses.map((response) => response.json()))
        setMoveDetails(data)
      } catch (error) {
        console.error('Error fetching move details:', error)
      }
    }
    console.log(linksArr)

    fetchMoveDetails()
  }, [linksArr])

  return (
    <>
      <h2>TOP MOVES</h2>
      {moveDetails && moveDetails.map((move) => <p key={move.name}>{move.name}</p>)}
    </>
  )
}
