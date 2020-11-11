import React, { useState, useCallback } from 'react'
import { useTransition } from 'react-spring'

import Carousel from './Components/Carousel'

interface SliderProps {
  width: string
  height: string
}

const data = [
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1580656519531-17669bf09590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1604942980447-8155eab1b2e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    url:
      'https://images.unsplash.com/photo-1583333213031-d3dda3505d6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  }
]

const mod = (n: any, m: any) => ((n % m) + m) % m

export const Slider: React.FC<SliderProps> = ({ width, height }) => {
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
          url={data[item].url}
          style={props}
          prev={handlePrev}
          next={handleNext}
        />
      ))}
    </div>
  )
}
