import { ArrowIcon, SelectInputContainer, SelectInputStyled } from './SelectInput.styled'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface pokemonType {
  name: string
  url: string
}

interface SelectInputProps {
  options: pokemonType[]
  typeRoute: string
}

export const SelectInput = ({ options, typeRoute }: SelectInputProps) => {

  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'all') {
      navigate(`${typeRoute}/all`);
    } else {
      navigate(`${typeRoute}/type/${value}`);
    }
    setSelectedType(value);
  };

  const navigate = useNavigate();


  return (
    <SelectInputContainer>
      <SelectInputStyled onChange={handleTypeChange} value={selectedType}>
        {selectedType === '' && (
          <option value='' disabled hidden>
            choose type
          </option>
        )}
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </SelectInputStyled>
      <ArrowIcon>▼</ArrowIcon>
    </SelectInputContainer>
  )
}
