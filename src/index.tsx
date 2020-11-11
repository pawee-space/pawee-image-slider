import React, { useState, useCallback } from 'react'
import { useTransition } from 'react-spring'

import Carousel from './Components/Carousel'

interface dataProps {
  id: number
  image: string
  name: string
  bio: string
  url: string
}

interface SliderProps {
  width: string
  height: string
  data: dataProps[]
}

const mod = (n: any, m: any) => ((n % m) + m) % m

export const Slider: React.FC<SliderProps> = ({ width, height, data }) => {
  const [index, setIndex] = useState(0)

  const handlePrev = useCallback(() => {
    setIndex((state) => mod(state - 1, data.length))
  }, [setIndex])

  const handleNext = useCallback(() => {
    setIndex((state) => mod(state + 1, data.length))
  }, [setIndex])

  const transitions = useTransition([index], (item: number) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <div>
      {transitions.map(({ item, key, props }) => (
        <Carousel
          key={key}
          width={width}
          height={height}
          image={data[item].image}
          url={data[item].url}
          name={data[item].name}
          bio={data[item].bio}
          style={props}
          prev={handlePrev}
          next={handleNext}
        />
      ))}
    </div>
  )
}
