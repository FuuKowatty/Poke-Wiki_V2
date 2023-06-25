import { AiOutlineHeart, AiFillHome} from 'react-icons/ai'
import { BiLemon} from 'react-icons/bi'
import { SlMagicWand} from 'react-icons/sl'
import { FiShield} from 'react-icons/fi'
import { TbSword} from 'react-icons/tb'
import { RiEyeOffLine} from 'react-icons/ri'
import { MdCatchingPokemon, MdFavorite, MdGrain } from 'react-icons/md'
import { GiStrawberry, GiRabbit, GiWrappedSweet } from 'react-icons/gi'
import { CiCoffeeBean } from 'react-icons/ci'
import { FaHotjar } from 'react-icons/fa'

export const FiltersButtonText = ['all', 'pokemons', 'berries']

export const Stats = [
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


 export const MenuItems = [
  {
    title: 'home',
    path: '/',
    icon: <AiFillHome />,
  },
  {
    title: 'pokemons',
    path: '/pokemons/all',
    icon: <MdCatchingPokemon />,
  },
  {
    title: 'berries',
    path: '/berries/all',
    icon: <GiStrawberry />,
  },
  {
    title: 'favorites',
    path: '/favorites',
    icon: <MdFavorite />,
  },
]

export const PokemonStats = [
  {
    name: 'hp',
    color: '#FF3E3E',
    icon: <AiOutlineHeart />,
  },
  {
    name: 'attack',
    color: '#FFA500',
    icon: <TbSword />,
  },
  {
    name: 'defense',
    color: '#00FF7F',
    icon: <FiShield />,
  },
  {
    name: 'special-attack',
    color: '#9400D3',
    icon: <SlMagicWand />,
  },
  {
    name: 'special-defense',
    color: '#0080FF',
    icon: <RiEyeOffLine />,
  },
  {
    name: 'speed',
    color: '#FFFF00',
    icon: <GiRabbit />,
  },
]

export const slides = [
  { id: 0, content: 'All About Pokémon & Berries' },
  { id: 1, content: 'Discover Pokémon Details' },
  { id: 2, content: 'Create Your Favorites List' },
  { id: 3, content: 'Gotta Catch \'Em All!' },
]