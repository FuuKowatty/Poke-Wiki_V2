interface PokemonType {
    slot: number
    type: {
      name: string
      url: string
    }
}

  interface PokemonSpecs {
    id: number
    abilities: AbilityInfo[]
    base_experience: number
    height: number
    name: string
    types: PokemonType[]
    weight: number
    sprites: {
      other: {
        dream_world: {
          front_default: string
        }
      }
    }
    stats: StatsInfo[]
    moves: MoveData[]
}

  interface Pokemon {
    name: string
    url: string
  }
  
 interface PokemonListProps {
    count: number
    next: null | string
    previous: null | string
    results: Array<Pokemon>
  }