import React from 'react'
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'
import { Container } from './styles'

interface CarouselProps {
  width: string
  height: string
  url: string
  style: any
  prev: () => void
  next: () => void
}

const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  url,
  style,
  prev,
  next
}) => {
  return (
    <Container width={width} height={height} style={style}>
      <img src={url} />
      <FiArrowLeftCircle className='left' onClick={prev} />
      <FiArrowRightCircle className='right' onClick={next} />

      <div>
        <h1>Nome da Ong</h1>
        <p>Descrição da Ong e chamada para conhecer o perfil</p>
        <a href='https://a.com'>Ver Perfil</a>
      </div>
    </Container>
  )
}

export default Carousel
