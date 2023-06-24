import { MovesContainer, MovesList, MovesListItem } from './Moves.styled'
import { DetailsHeader } from '../PokemonDetail.styled'
import { useEffect, useState } from 'react'

interface Props {
  linksArr: string[]
}

export function PokemonMoves({ linksArr }: Props) {
  const [moveDetails, setMoveDetails] = useState<MoveDetailsProps[] | null>(null)
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
    <MovesContainer>
      <DetailsHeader>Moves</DetailsHeader>
      <MovesList>
        {moveDetails &&
          moveDetails.map((move) => <MovesListItem key={move.name}>{move.name}</MovesListItem>)}
      </MovesList>
    </MovesContainer>
  )
}
