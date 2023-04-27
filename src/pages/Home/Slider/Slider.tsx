import { SliderItem, SliderContainer } from 'pages/Home/Slider/Slider.styled'
import { useAppContext } from 'hooks/useAppContext'
import { size } from 'utils/breakpoints'
import { useTransition } from '@react-spring/web'
import { useState, useEffect } from 'react'

const slides = [
  { id: 0, content: '20% off on your first order!' },
  { id: 1, content: 'Summer sale starts now' },
  { id: 2, content: 'Visit any store.' },
  { id: 3, content: 'Please like and subscribe' },
]

export function Slider() {
  const [messageIndex, setMessageIndex] = useState(0)
  const { browserWidth } = useAppContext()
  const maxSize = parseInt(size.desktop)
  const width = browserWidth > maxSize ? maxSize : browserWidth

  const transitions = useTransition(slides[messageIndex], {
    from: { x: -width, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: width, opacity: 0 },
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