import { ArrowIcon, SelectInputContainer, SelectInputStyled } from './SelectInput.styled'
import { pokemonType } from '../FiltersPokemons'

interface SelectInputProps {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: Array<pokemonType>
  selectedValue: string
}

export const SelectInput = ({ handleChange, options, selectedValue }: SelectInputProps) => {
  const allOption = {
    name: 'all',
    url: 'https://pokeapi.co/api/v2/type/',
  }

  return (
    <SelectInputContainer>
      <SelectInputStyled onChange={handleChange} value={selectedValue}>
        {selectedValue === '' && (
          <option value='' disabled hidden>
            choose type
          </option>
        )}
        {[allOption, ...options].map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </SelectInputStyled>
      <ArrowIcon>▼</ArrowIcon>
    </SelectInputContainer>
  )
}
