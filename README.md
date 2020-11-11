# pawee-image-slider

> Image slideshow component widely editable

[![NPM](https://img.shields.io/npm/v/pawee-image-slider.svg)](https://www.npmjs.com/package/pawee-image-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# using npm
$ npm install --save pawee-image-slider

# using yarn
$ yarn add pawee-image-slider
```

## Usage

```jsx
import React from 'react'

import Slider from 'pawee-image-slider'

const data = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1580656519531-17669bf09590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Amidogo',
    bio: 'ONG amiga de todos animaiszinhos e amante de cachorros',
    url: 'https://www.google.com.br'
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1604942980447-8155eab1b2e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'BIRBRIB',
    bio: 'Acolhedora de animais de rua e dando asas a eles',
    url: 'https://www.redbull.com/'
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'PaweeFanbase',
    bio: 'FanBase da Pawee com localização fisica para abrigar animais que nem Batman',
    url: 'https://www.pawee.space'
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1583333213031-d3dda3505d6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Cansei dessa Vida',
    bio: 'E agora eu vou parar de ajudar os animais do meu meio pra ajudar os animais de rua',
    url: 'https://www.pornhub.com.br'
  }
]

const Carousel = () => {
  return (
    <Slider data={data} width="1056px" height="576px" />
  )
}

export default Carousel
```

## License

MIT © [Pawee Space](https://github.com/Pawee-Space)
