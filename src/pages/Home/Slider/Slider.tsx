import { SliderItem, SliderContainer } from 'pages/Home/Slider/Slider.styled'
import { size } from 'utils/breakpoints'
import { useViewport } from 'hooks/useViewport'
import { slides } from 'data/data'
import { useTransition } from '@react-spring/web'
import { useState, useEffect } from 'react'



export function Slider() {
  const [messageIndex, setMessageIndex] = useState(0)
  const { browserWidth } = useViewport()
  const maxSize = parseInt(size.desktop)
  const maxWidth = browserWidth > maxSize ? maxSize : browserWidth

  const transitions = useTransition(slides[messageIndex], {
    from: { x: -maxWidth, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: maxWidth, opacity: 0 },
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % slides.length)
    }, 1500)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <SliderContainer>
      {transitions((style, item) => (
        <SliderItem style={style}>{item.content}</SliderItem>
      ))}
    </SliderContainer>
  )
}
