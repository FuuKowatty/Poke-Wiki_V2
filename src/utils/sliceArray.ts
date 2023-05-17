import { MoveData } from 'components/Card/PokemonCard/PokemonCard'

export function sliceArray(arr: MoveData[]) {
    const linksArr = arr.map((move) => move.move.url)
    const slicedLinksArr = linksArr.slice(0, 5)
  
    return slicedLinksArr
  }
  