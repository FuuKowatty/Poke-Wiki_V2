import { moveDetailsProps } from 'pages/Pokemons/PokemonDetail'
import { DetailsHeader, MovesList, MovesListItem } from 'pages/Pokemons/PokemonDetail.styled'
import { useEffect, useState } from 'react'

interface props {
  linksArr: string[]
}

export function PokemonMoves({ linksArr }: props) {
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
    fetchMoveDetails()
  }, [linksArr])

  return (
    <section>
      <DetailsHeader>TOP MOVES</DetailsHeader>
      <MovesList>
        {moveDetails &&
          moveDetails.map((move) => <MovesListItem key={move.name}>{move.name}</MovesListItem>)}
      </MovesList>
    </section>
  )
}
