import {Button} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import * as React from 'react'
import Images from '../components/image/Image.component'
import Link from '../Link'

const Featured = () => {
  return (
    <Box sx={{mb: 6}}>
      <Typography variant="h5" sx={{mb: 2, fontWeight: 600}}>
        Latest
      </Typography>
      <Box sx={{display: {xs: 'block', md: 'flex'}}}>
        <Images
          url="https://picsum.photos/1000"
          height={500}
          otherSx={{
            width: 1,
            mb: {xs: 1, md: 0},
            mr: {xs: 0, md: 1},
          }}
          otherImgSx={{filter: 'blur(1px)'}}
        >
          <Box sx={{position: 'absolute', bottom: '8%', left: '8%'}}>
            <Typography
              sx={{
                mb: 2,
                color: 'white',
              }}
            >
              Lorem ipsum dolor sir amet
            </Typography>
            <Button
              variant="contained"
              sx={{borderRadius: 50}}
              component={Link}
              href="/product"
            >
              shop
            </Button>
          </Box>
        </Images>

        <Images
          url="https://picsum.photos/1900"
          height={500}
          otherSx={{
            width: 1,
            mb: {xs: 1, md: 0},
            mr: {xs: 0, md: 1},
          }}
          otherImgSx={{filter: 'blur(1px)'}}
        >
          <Box sx={{position: 'absolute', bottom: '8%', left: '8%'}}>
            <Typography
              sx={{
                mb: 2,
                color: 'white',
              }}
            >
              Lorem ipsum dolor sir amet
            </Typography>
            <Button
              variant="contained"
              sx={{borderRadius: 50}}
              component={Link}
              href="/product"
            >
              shop
            </Button>
          </Box>
        </Images>
      </Box>
    </Box>
  )
}

export default Featured
