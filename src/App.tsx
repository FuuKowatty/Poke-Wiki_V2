import { Home } from 'pages/Home'
import { Container } from 'styles/globalComponents'
import { GlobalStyles } from 'styles/globalStyles'
import { Navbar } from 'layouts/Navbar'
import { AppProvider } from 'context'
import { PokemonType } from 'pages/Pokemons/PokemonType'
import { PokemonList } from 'pages/Pokemons/PokemonList'
import { PokemonSearch } from 'pages/Pokemons/PokemonSearch'
import { BerriesList } from 'pages/Berries/BerriesList'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { BerryType } from 'pages/Berries/BerryType'
import { BerriesSearch } from 'pages/Berries/BerriesSearch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppProvider>
      <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='pokemons'>
              <Route path='type/:typeName' element={<PokemonType />} />
              <Route path='all' element={<PokemonList />} />
              <Route path='search' element={<PokemonSearch />} />
            </Route>
            <Route path='berries'>
              <Route path='type/:typeName' element={<BerryType />} />
              <Route path='all' element={<BerriesList />} />
              <Route path='search' element={<BerriesSearch />} />
            </Route>
            <Route path='*' element={<FetchError />} />
          </Routes>
        </Container>
      </AppProvider>
    </BrowserRouter>
  )
}
