import alternativeImg from 'assets/default_image.svg'

export const setAlternativeImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    img.src = alternativeImg
  }
  
  export const checkImage = (img: string | undefined) => {
    if(img === undefined) return null
    else if (img === null) {
      return alternativeImg
    } else {
      return img
  }
  }