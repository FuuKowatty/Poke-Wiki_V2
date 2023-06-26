import { CardContainer, CardImage, ErrorMessageContainer, SkeletonLoading } from './Card.styled';
import alternativeImg from 'assets/default_image.svg'

interface CardWrapperProps<T> {
    children: React.ReactNode
    data: T | null
    error: string | null
    isLoading: boolean
    handleHover: (hover: boolean) => void
    handleLoad: () => void
    img: string | undefined | null
}

export function CardWrapper<T>({
  children,
  data,
  error,
  isLoading,
  handleHover,
  handleLoad,
  img,
}: CardWrapperProps<T>) {

    const setAlternativeImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const img = e.currentTarget
        img.src = alternativeImg
      }

    const checkImage = () => {
        return img === null ? alternativeImg : img
      }



    return (
        <CardContainer onMouseEnter={() => handleHover(true)} onMouseLeave={() =>   handleHover(false)}
        >
          {isLoading && <SkeletonLoading />}
          {!isLoading && error && (
                <ErrorMessageContainer>
                  <p>Sorry We could not download data: </p>
                </ErrorMessageContainer>
          )}
          {data && (
            <>
                <CardImage
                src={checkImage()}
                alt={''}
                onLoad={handleLoad}
                onError={setAlternativeImg}
                style={{ display: isLoading || !data ? 'none' : 'block' }}
                />
                {children} 
            </>
          )} 
        </CardContainer>
      )
    }
