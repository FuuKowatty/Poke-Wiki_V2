import { Home } from 'pages/Home'
import { Container } from 'styles/StyledContainer'
import { GlobalStyles } from 'styles/Global'
import { Navbar } from 'layouts/Navbar'
import { AppProvider } from 'context'
import { PokemonTypes } from 'pages/PokemonTypes'
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
            <Route path='/types' element={<PokemonTypes />} />
          </Routes>
        </Container>
      </AppProvider>
    </BrowserRouter>
  )
}
