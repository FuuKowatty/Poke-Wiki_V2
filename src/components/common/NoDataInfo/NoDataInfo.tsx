import { InfoIcon } from './NoDataInfo.styled'
import { CenteredContainer, InfoParagraph } from 'styles/globalComponents'

export function NoDataInfo() {
  return (
    <CenteredContainer>
      <InfoIcon />
      <InfoParagraph>No Data Found</InfoParagraph>
    </CenteredContainer>
  )
}
