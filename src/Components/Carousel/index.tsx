import React from 'react'
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'
import { Container, Fade } from './styles'

interface CarouselProps {
  width: string
  height: string
  image: string
  url: string
  name: string
  bio: string
  style: any
  prev: () => void
  next: () => void
}

const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  image,
  style,
  url,
  name,
  bio,
  prev,
  next
}) => {
  return (
    <Container>
      <Fade width={width} height={height} style={style}>
        <img src={image} />
        <FiArrowLeftCircle className='left' onClick={prev} />
        <FiArrowRightCircle className='right' onClick={next} />

        <div>
          <h1>{name}</h1>
          <p>{bio}</p>
          <a href={url}>Ver Perfil</a>
        </div>
      </Fade>
    </Container>
  )
}

export default Carousel
