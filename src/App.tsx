import { Home } from 'pages/Home'
import { Container } from 'styles/globalComponents'
import { GlobalStyles } from 'styles/globalStyles'
import { Navbar } from 'layouts/Navbar'
import { AppProvider } from 'context'
import { PokemonType } from 'pages/PokemonType/PokemonType'
import { PokemonList } from 'pages/PokemonList/PokemonList'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { PokemonSearch } from 'pages/PokemonSearch/PokemonSearch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppProvider>
        <Container>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemons/all' element={<PokemonList />} />
            <Route path='/pokemons/search' element={<PokemonSearch />} />
            <Route path='/pokemons/type/:typeName' element={<PokemonType />} />
            <Route path='*' element={<FetchError />} />
          </Routes>
        </Container>
      </AppProvider>
    </BrowserRouter>
  )
}
