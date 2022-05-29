import {Box} from '@mui/material'
import React from 'react'
import Image from 'next/image'

type ImageProps = {
  url: string
  height: number
  otherSx?: any
}

const Images = (props: ImageProps) => {
  const {url, height, otherSx} = props
  return (
    <Box sx={{height, position: 'relative', ...otherSx}}>
      <Image
        src={url}
        alt="image"
        objectFit="cover"
        layout="fill"
        style={{borderRadius: 8}}
      />
    </Box>
  )
}

export default Images
