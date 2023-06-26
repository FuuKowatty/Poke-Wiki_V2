interface StatsInfo {
    base_stat: number
    effor: number
    stat: {
      name: string
    }
  }

  interface AbilityInfo {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }
  
  interface MoveVersionGroupDetails {
    level_learned_at: number
    move_learn_method: {
      name: string
      url: string
    }
    version_group: {
      name: string
      url: string
    }
  }
  
  interface Move {
    name: string
    url: string
  }

 interface MoveData {
    move: Move
    version_group_details: MoveVersionGroupDetails[]
  }
  


 interface MoveDetailsProps {
    accuracy: number | null
    damage_class: {
      name: string | null
    }
    power: number | null
    type: {
      name: string | null
    }
    meta: {
      crit_rate: number | null
      drain: number | null
      healing: number | null
    }
    name: string
  }

  interface Favorites {
    type: string
    name: string
  }