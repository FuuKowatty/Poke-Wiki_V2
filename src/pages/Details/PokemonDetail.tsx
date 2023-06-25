import {
  DetailsName,
  ImageContainer,
  PokemonDetailImage,
  DetailsContainer,
  DescContainer,
  DetailsHeader,
  EvolutionsContainer,
  BackIconDetails,
} from './PokemonDetail.styled'
import { LoadingState } from 'components/common/LoadingState/LoadingState'
import { checkDescription, checkHabitat } from 'utils/checkData'
import { PokemonMoves } from 'pages/Details/Moves/PokemonMoves'
import { PokemonStats } from 'pages/Details/Stats/PokemonStats'
import { PokemonTable } from 'pages/Details/Table/PokemonTable'
import { checkImage, setAlternativeImg } from 'utils/imageUtils'
import { FetchError } from 'components/common/FetchErrors/FetchError'
import { getPokemonDetails } from 'services/getPokemonDetails'
import { useNavigate, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'



export function PokemonDetail() {
  const { name } = useParams()
  if(!name) return null

  const {data, error, isLoading } = getPokemonDetails(name)

  const navigate = useNavigate()
  
  const sliceArray = (arr: MoveData[]) => {
    const linksArr = arr.map((move) => move.move.url)
    const slicedLinksArr = linksArr.slice(0, 5)

    return slicedLinksArr
  }



  return (
    <>
      {error && <FetchError />}
      {isLoading && <LoadingState />}
      <BackIconDetails onClick={() => navigate(-1)}>
        <BiArrowBack />
      </BackIconDetails>
      {!isLoading && data && (
        <DetailsContainer>
          <ImageContainer>
            <PokemonDetailImage
              src={checkImage(data.sprites.other.dream_world.front_default)}
              onError={setAlternativeImg}
            />
            <DetailsName>{data.name}</DetailsName>
          </ImageContainer>
          <PokemonStats stats={data.stats} />
          <PokemonTable
            data={data}
            habitat={checkHabitat(data.habitat)}
            types={data.types}
          />
          <PokemonMoves linksArr={sliceArray(data.moves)} />
          <DescContainer>
            <DetailsHeader>Description</DetailsHeader>
            {checkDescription(data.flavor_text_entries)}
          </DescContainer>
          <EvolutionsContainer />
        </DetailsContainer>
      )}
    </>
  )
}
