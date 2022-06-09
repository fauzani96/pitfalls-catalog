import {Box} from '@mui/material'
import React from 'react'
import Image from 'next/image'

type ImageProps = {
  url: string
  height: number
  otherSx?: any
  radius?: boolean
  otherImgSx?: any
  children?: React.ReactNode
  objectFit?: string
}

const Images = ({
  url,
  height,
  otherSx,
  radius = true,
  otherImgSx,
  children,
  objectFit = 'cover',
}: ImageProps) => {
  return (
    <Box sx={{height, position: 'relative', ...otherSx}}>
      <Image
        src={url}
        alt="image"
        // @ts-ignore
        objectFit={objectFit}
        layout="fill"
        style={{borderRadius: radius ? 8 : 0, ...otherImgSx}}
      />
      {children}
    </Box>
  )
}

export default Images
