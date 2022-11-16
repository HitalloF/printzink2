import React from 'react'
import Carousel from 'better-react-carousel'
import Silk from '../img/galery/silk.png'
import Heat from '../img/galery/heat.png'
import Bordado from '../img/galery/bordado.png'
import Final from '../img/galery/final.png'
const Galery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={Silk} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Heat} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Bordado} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={Final} />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}
export default Galery