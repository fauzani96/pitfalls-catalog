import {Box, Container, Icon, IconButton, Typography} from '@mui/material'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import Images from '../../src/components/image/Image.component'
import {size} from '../../src/constants/Size.constant'

const DetailProduct = () => {
  const router = useRouter()
  const [url, setUrl] = useState('https://picsum.photos/1200')

  return (
    <Container
      maxWidth="lg"
      sx={{
        mb: 4,
        mt: 3,
      }}
    >
      <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
        <IconButton color="primary" onClick={router.back}>
          <Icon>arrow_back</Icon>
        </IconButton>
        <Typography variant="h5" sx={{fontWeight: 600, ml: 1}}>
          Oversized T-Shirt
        </Typography>
      </Box>

      <Typography variant="body1" gutterBottom>
        T-Shirt
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Rp.200.000
      </Typography>

      <Box sx={{position: 'relative', height: 300, my: 4}}>
        <Image
          src={url}
          alt=""
          objectFit="cover"
          layout="fill"
          style={{borderRadius: 12}}
        />
      </Box>
      <Box sx={{display: 'flex', mb: 4}}>
        {Array.from({length: 5}).map((res, i) => {
          const _url = `https://picsum.photos/1${i}00`
          return (
            <Box
              sx={{
                width: {xs: 1 / 3, md: 1 / 4},
                px: 1,
                cursor: 'pointer',
              }}
              key={i}
              onClick={() => setUrl(_url)}
            >
              <Images
                url={_url}
                height={125}
                otherSx={{
                  border: url === _url ? '1px solid' : 0,
                  borderRadius: 2,
                }}
              />
            </Box>
          )
        })}
      </Box>
      <Typography variant="h6">Size</Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        {size.map((res, i) => (
          <Box sx={{width: {xs: 1 / 3, md: 1 / 5}}} key={i}>
            <Typography>{res.size}</Typography>
            <Typography>Width : {res.width}</Typography>
            <Typography>Height : {res.height}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default DetailProduct
