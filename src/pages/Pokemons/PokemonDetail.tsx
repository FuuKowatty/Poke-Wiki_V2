import { useParams } from 'react-router-dom'


export function PokemonDetail() {

    const {name} = useParams()

  return (
    <div>{name}</div>
  )
}
