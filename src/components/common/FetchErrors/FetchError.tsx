import { ErrorIcon } from './FetchError.styled'
import { Button, CenteredContainer, InfoParagraph } from 'styles/globalComponents'
import { useNavigate } from 'react-router-dom'

export function FetchError() {
  const navigate = useNavigate()

  return (
    <CenteredContainer>
      <ErrorIcon />
      <InfoParagraph>Unable to load the data</InfoParagraph>
      <Button onClick={() => navigate('/')}>BACK TO HOME</Button>
    </CenteredContainer>
  )
}
