import React from 'react'
import {Carousel} from 'react-responsive-carousel'

const CarouselComponent = () => (
  <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false}>
    <img
      alt=""
      src="https://i.pinimg.com/originals/2b/75/34/2b7534a13579dcab2cea020c51b60105.jpg"
    />

    <img
      alt=""
      src="https://i.pinimg.com/originals/2b/75/34/2b7534a13579dcab2cea020c51b60105.jpg"
    />

    <img
      alt=""
      src="https://i.pinimg.com/originals/2b/75/34/2b7534a13579dcab2cea020c51b60105.jpg"
    />
  </Carousel>
)

export default CarouselComponent
