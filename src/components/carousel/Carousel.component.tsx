import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import Images from '../image/Image.component'

const CarouselComponent = () => (
  <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false}>
    <Images
      url={`/images/carousel/car1.jpeg`}
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
    {/* <Images
      url={`/images/carousel/car1.jpeg`}
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    /> */}
    {/* <Images
      url="https://cf.shopee.co.id/file/dd2640f00858423db6bca11dba4b63bb"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
    <Images
      url="https://cf.shopee.co.id/file/a1acdb72c8a54afe488d4778194fcf18"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
    <Images
      url="https://cf.shopee.co.id/file/c74c015604dd2f342a517e967000656f"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    />
    <Images
      url="https://cf.shopee.co.id/file/ae7a74d5da530dbfe0a96865e7811c78"
      height={250}
      otherSx={{
        width: 1,
      }}
      radius={false}
    /> */}
  </Carousel>
)

export default CarouselComponent
