import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import Images from '../image/Image.component'

const CarouselComponent = () => (
  <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false}>
    <Images
      url="https://picsum.photos/1300"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
    <Images
      url="https://picsum.photos/1400"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
    <Images
      url="https://picsum.photos/1600"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
    <Images
      url="https://picsum.photos/1500"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
  </Carousel>
)

export default CarouselComponent
