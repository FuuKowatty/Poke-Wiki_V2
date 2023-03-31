import { Searchbar } from './Searchbar'
import { Logo } from 'components/Logo'
import { IconButton } from 'styles/StyledContainer'
import { useAppContext } from 'hooks/useAppContext'
import { StyledDrawer } from 'styles/Drawer'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { useTransition } from '@react-spring/web'
import { useState } from 'react'

export function Mobile() {
  const { browserWidth } = useAppContext()

  const [isMobileSearchbarToggled, setIsMobileSearchbarToggled] = useState(false)
  const [isDrawerToggled, setIsDrawerToggled] = useState(false)

  const toggleMobileSearchbar = () => {
    console.log(isMobileSearchbarToggled)
    setIsMobileSearchbarToggled((prev) => !prev)
  }

  const toggleDrawer = () => {
    setIsDrawerToggled((prev) => !prev)
  }

  const transition = useTransition(isDrawerToggled, {
    from: { x: -browserWidth },
    enter: { x: 0 },
    leave: { x: -browserWidth },
  })

  return (
    <>
      {isMobileSearchbarToggled ? (
        <>
          <IconButton onClick={() => toggleMobileSearchbar()}>
            <BiArrowBack />
          </IconButton>
          <Searchbar />
        </>
      ) : (
        <>
          <IconButton onClick={() => toggleDrawer()}>
            <GiHamburgerMenu />
          </IconButton>
          <Logo />
          <IconButton onClick={() => toggleMobileSearchbar()}>
            <AiOutlineSearch />
          </IconButton>
        </>
      )}
      {transition((style, item) =>
        item ? (
          <StyledDrawer style={style}>
            <IconButton onClick={() => toggleDrawer()}>
              <IoMdClose />
            </IconButton>
          </StyledDrawer>
        ) : (
          false
        ),
      )}
    </>
  )
}
