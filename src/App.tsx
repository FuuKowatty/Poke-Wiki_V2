import { Home } from 'pages/Home'
import { Container } from 'styles/globalComponents'
import { GlobalStyles } from 'styles/globalStyles'
import { Navbar } from 'layouts/Navbar'
import { PokemonType } from 'pages/Pokemons/PokemonType'
import { PokemonList } from 'pages/Pokemons/PokemonList'
import { PokemonSearch } from 'pages/Pokemons/PokemonSearch'
import { BerriesList } from 'pages/Berries/BerriesList'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { BerryType } from 'pages/Berries/BerryType'
import { BerriesSearch } from 'pages/Berries/BerriesSearch'
import { Favorites } from 'pages/Favorites/Favorites'
import { PokemonDetail } from 'pages/Pokemons/PokemonDetail'
import { FavoritesProvider } from 'context/FavoriteContext/FavoritesProvider'
import { ViewportProvider } from 'context/ViewportContext/ViewportProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <ViewportProvider>
          <FavoritesProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='pokemons/*'>
                <Route path='all' element={<PokemonList />} />
                <Route path='type/:typeName' element={<PokemonType />} />
                <Route path='search' element={<PokemonSearch />} />
                <Route path=':name/details' element={<PokemonDetail />} />
              </Route>
              <Route path='berries/*'>
                <Route path='all' element={<BerriesList />} />
                <Route path='type/:typeName' element={<BerryType />} />
                <Route path='search' element={<BerriesSearch />} />
              </Route>
              <Route path='/favorites' element={<Favorites />} />
              <Route path='*' element={<FetchError />} />
            </Routes>
          </FavoritesProvider>
        </ViewportProvider>
      </Container>
    </BrowserRouter>
  )
}
