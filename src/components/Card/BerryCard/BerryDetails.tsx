import {
    BerryDetailsContainer,
    CloseDetailsItem,
    FlavorsContainer,
    Options,
} from '../Card.styled'
import { calculateProgressWidth } from 'utils/calculateMeasures'
import { Table, TableRow } from 'pages/Details/Table/Table.styled'
import { getStatAccessories } from 'pages/Details/Stats/PokemonStats';
import { Stats } from 'data/data';
import { BarContainer, InfoStatContainer, ProgressBar, BarStats } from 'pages/Details/Stats/Stats.styled';
import { AiOutlineClose } from 'react-icons/ai'

interface BerryDetailsProps  {
  flavors: Flavor[];
  firmness: Firmness;
  growthTime: number;
  category: Category;
  cost: number;
  onCloseDetails: () => void
}



export function BerryDetails({firmness, growthTime, category, cost, flavors, onCloseDetails}: BerryDetailsProps) {


  const cardItemsValues = [
    {
      name: 'firmness',
      value: firmness.name,
    },
    {
      name: 'grow time',
      value: `${growthTime} days`,
    },
    {
      name: 'category',
      value: category.name,
    },
    {
      name: 'cost',
      value: `${cost}¥`,
    },
  ]

  return (
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
        {flavors.map(({flavor, potency}) => {

          const LIMIT_POTENCY = 40

          const statAccessories = getStatAccessories(Stats, flavor.name)
          if (!statAccessories) {
            return null
          }

          return (
            <BarContainer key={flavor.name}>
              <InfoStatContainer>
                {statAccessories.icon} - {potency}
              </InfoStatContainer>
              <BarStats>
                <ProgressBar
                  width={calculateProgressWidth(LIMIT_POTENCY, potency)}
                  color={statAccessories.color}
                />
              </BarStats>
            </BarContainer>
          )
        })}
      </FlavorsContainer>
    </BerryDetailsContainer>
  )
}
