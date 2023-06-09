import { Home } from 'pages/Home/Home'
import { Container } from 'styles/globalComponents'
import { GlobalStyles } from 'styles/globalStyles'
import { Navbar } from 'layouts/Navbar/Navbar'
import { PokemonType } from 'pages/Pokemons/PokemonType'
import { PokemonList } from 'pages/Pokemons/PokemonList'
import { PokemonSearch } from 'pages/Pokemons/PokemonSearch'
import { BerriesList } from 'pages/Berries/BerriesList'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { BerryType } from 'pages/Berries/BerryType'
import { BerriesSearch } from 'pages/Berries/BerriesSearch'
import { Favorites } from 'pages/Favorites/Favorites'
import { PokemonDetail } from 'pages/Details/PokemonDetail'
import { FavoritesProvider } from 'context/FavoriteContext/FavoritesProvider'
import { ViewportProvider } from 'context/ViewportContext/ViewportProvider'
import { theme } from 'styles/theme'
import { Footer } from 'layouts/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <ViewportProvider>
          <FavoritesProvider>
            <BrowserRouter>
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
            </BrowserRouter>
          </FavoritesProvider>
        </ViewportProvider>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}
