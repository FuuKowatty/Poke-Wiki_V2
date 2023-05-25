import {
  BerryDetailsContainer,
  CloseDetailsItem,
  FlavorsContainer,
  Name,
  Options,
  OptionsItem,
} from 'components/Card/CardInterface/CardInterface.styled'
import { useViewportContext } from 'context/ViewportContext/ViewportProvider'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'

import { getStatAccessories } from 'pages/Details/Stats/PokemonStats'
import {
  BarContainer,
  BarStats,
  InfoStatContainer,
  ProgressBar,
} from 'pages/Details/Stats/Stats.styled'
import { category, firmness, flavor } from 'components/Card/BerryCard/BerryCard'
import { calculateProgressWidth } from 'utils/calculateMeasures'
import { Table, TableRow } from 'pages/Details/Table/Table.styled'
import { animated, useSpring } from '@react-spring/web'
import { HiViewfinderCircle } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'
import { MdFavoriteBorder, MdGrain } from 'react-icons/md'
import { FaHotjar } from 'react-icons/fa'
import { GiWrappedSweet } from 'react-icons/gi'
import { CiCoffeeBean } from 'react-icons/ci'
import { BiLemon } from 'react-icons/bi'
import { useEffect, useState } from 'react'

interface CardInterfaceProps {
  isHovered: boolean
  handleAddFavorite: () => void
  name: string
  url: string
  flavors: flavor[]
  firmness: firmness
  growthTime: number
  category: category
  cost: number
}

interface CardItemsProps {
  handleAddFavorite: () => void
  isFav: boolean
  cardItems: {
    flavors: flavor[]
    firmness: firmness
    growthTime: number
    category: category
    cost: number
  }
  name: string
}

export interface favItem {
  name: string
  type: string
}

const Stats = [
  {
    name: 'spicy',
    color: '#FF4500',
    icon: <FaHotjar />,
  },
  {
    name: 'dry',
    color: '#D2B48C',
    icon: <MdGrain />,
  },
  {
    name: 'sweet',
    color: '#FFC0CB',
    icon: <GiWrappedSweet />,
  },
  {
    name: 'bitter',
    color: '#800080',
    icon: <CiCoffeeBean />,
  },
  {
    name: 'sour',
    color: '#00FF00',
    icon: <BiLemon />,
  },
]

export function BerryCardInterface({
  isHovered,
  handleAddFavorite,
  name,
  url,
  flavors,
  firmness,
  growthTime,
  category,
  cost,
}: CardInterfaceProps) {
  const { isTablet, isMobile } = useViewportContext()
  const { favorites } = useFavoriteContext()

  const props = useSpring({
    opacity: isHovered ? 1 : 0,
  })

  // check if card is favorite
  const itemName = url
  const favNames = favorites.map((fav: favItem) => fav.name)
  const isFav = favNames.indexOf(itemName) === -1 ? false : true

  const cardInterfaceItems = {
    flavors,
    firmness,
    growthTime,
    category,
    cost,
  }

  return (
    <>
      {isTablet || isMobile ? (
        <CardItems
          handleAddFavorite={handleAddFavorite}
          isFav={isFav}
          cardItems={cardInterfaceItems}
          name={name}
        />
      ) : (
        <animated.div style={props}>
          <CardItems
            handleAddFavorite={handleAddFavorite}
            isFav={isFav}
            cardItems={cardInterfaceItems}
            name={name}
          />
        </animated.div>
      )}
    </>
  )
}

function CardItems({ handleAddFavorite, isFav, cardItems, name }: CardItemsProps) {
  const [isFavActive, setisFavActive] = useState(isFav)
  const [isDetailsActive, setIsDetailsActive] = useState(false)
  const { flavors, firmness, category, cost, growthTime } = cardItems
  const cardItemsValues = [
    {
      name: 'firmness',
      value: firmness.name,
    },
    {
      name: 'grow time',
      value: growthTime + 'days',
    },
    {
      name: 'category',
      value: category.name,
    },
    {
      name: 'cost',
      value: cost + '¥',
    },
  ]

  useEffect(() => {
    setisFavActive(isFav)
  }, [isFav])

  const onAddFavorite = () => {
    handleAddFavorite()
    setisFavActive(!isFavActive)
  }

  const onViewDetails = () => {
    setIsDetailsActive(true)
  }

  const onCloseDetails = () => {
    setIsDetailsActive(false)
  }

  return (
    <>
      {!isDetailsActive && (
        <>
          <Options>
            <OptionsItem onClick={onAddFavorite} isActive={isFavActive}>
              <MdFavoriteBorder />
            </OptionsItem>
            <OptionsItem onClick={onViewDetails}>
              <HiViewfinderCircle />
            </OptionsItem>
          </Options>
          <Name>{name}</Name>
        </>
      )}

      {isDetailsActive && (
        <BerryDetailsContainer>
          <Options>
            <CloseDetailsItem onClick={onCloseDetails}>
              <AiOutlineClose />
            </CloseDetailsItem>
          </Options>
          <FlavorsContainer>
            <Table>
              <tbody>
                <TableRow isSmaller>
                  <th>Property</th>
                  <th>Value</th>
                </TableRow>
                {cardItemsValues.map((cardItem) => (
                  <TableRow key={cardItem.name} isSmaller>
                    <td>{cardItem.name}</td>
                    <td>{cardItem.value}</td>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            {flavors.map((flavor) => {
              const statAccessories = getStatAccessories(Stats, flavor.flavor.name)
              if (!statAccessories) {
                return null
              }

              return (
                <BarContainer key={flavor.flavor.name}>
                  <InfoStatContainer>
                    {statAccessories.icon} - {flavor.potency}
                  </InfoStatContainer>
                  <BarStats>
                    <ProgressBar
                      width={calculateProgressWidth(40, flavor.potency)}
                      color={statAccessories.color}
                    />
                  </BarStats>
                </BarContainer>
              )
            })}
          </FlavorsContainer>
        </BerryDetailsContainer>
      )}
    </>
  )
}
