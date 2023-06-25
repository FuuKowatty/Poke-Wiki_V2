import {useState} from 'react'

export function useHover() {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (bol: boolean) => {
      setIsHovered(bol)
    }

    return {isHovered, handleHover}
}
