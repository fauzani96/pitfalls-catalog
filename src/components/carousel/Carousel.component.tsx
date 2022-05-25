import Image from 'next/image'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'

const CarouselComponent = () => (
  <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false}>
    <div style={{width: '100%', position: 'relative', height: 250}}>
      <Image
        alt="2"
        src="https://picsum.photos/1300"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div style={{width: '100%', position: 'relative', height: 250}}>
      <Image
        alt="3"
        src="https://picsum.photos/1400"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div style={{width: '100%', position: 'relative', height: 250}}>
      <Image
        alt="4"
        src="https://picsum.photos/1600"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </Carousel>
)

export default CarouselComponent
