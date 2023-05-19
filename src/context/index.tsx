import { useState, createContext, ReactNode } from 'react'

interface ContextProps {
  favorites: FavoritesProps[] | []
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesProps[] | []>>
  favoriteItemsLimit: number
}

export interface FavoritesProps {
  type: string
  name: string
}

export const Context = createContext<ContextProps>({
  favorites: [],
  setFavorites: () => {
    console.log('milego')
  },
  favoriteItemsLimit: 20,
})

export function AppProvider({ children }: { children: ReactNode }) {

  // czy w tej apce jest mi potrzebny kontekst w ogole? jak zrobic zeby stan sie dynamicznie aktualizował? bo przeciez useViewport tez mi nie aktualizowalo szerokosci bez stanu tutaj.
  const [favorites, setFavorites] = useState<FavoritesProps[] | []>([]) // czy da rade w hooku aby sie aktualizował dac favorite?
  const favoriteItemsLimit = 20 // przenies

  return (
    <Context.Provider
      value={{
        favorites,
        setFavorites,
        favoriteItemsLimit,
      }}
    >
      {children}
    </Context.Provider>
  )
}
