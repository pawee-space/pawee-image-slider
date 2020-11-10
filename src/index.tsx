import * as React from 'react'
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'

import { Container } from './styles'

// interface Props {
//   text: string
// }

export const ExampleComponent = () => {
  const background =
    'https://user-images.githubusercontent.com/54639269/95382485-18568b00-08c0-11eb-956c-ed6305fb3dee.png'

  return (
    <Container>
      <img src={background} />
      <FiArrowLeftCircle className='left' />
      <FiArrowRightCircle className='right' />

      <div>
        <h1>Nome da Ong</h1>
        <p>Descrição da Ong e chamada para conhecer o perfil</p>
        <a href='https://a.com'>Ver Perfil</a>
      </div>
    </Container>
  )
}
