import { Options, OptionsItem } from 'components/CardInterface/CardInterface.styled'
import { HiViewfinderCircle } from 'react-icons/hi2';
import { MdFavoriteBorder } from 'react-icons/md';

export function CardInterface() {
  return (
    <Options>
      <OptionsItem>
        <MdFavoriteBorder />
      </OptionsItem>
      <OptionsItem>
        <HiViewfinderCircle />
      </OptionsItem>
    </Options>
  )
}
