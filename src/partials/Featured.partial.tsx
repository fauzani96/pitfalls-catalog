import {Button} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import * as React from 'react'

const Featured = () => {
  return (
    <Box sx={{mb: 6}}>
      <Typography variant="h5" sx={{mb: 2, fontWeight: 600}}>
        Latest
      </Typography>
      <Box sx={{display: {xs: 'block', md: 'flex'}}}>
        <Box
          sx={{
            position: 'relative',
            width: 1,
            height: 500,
            mb: {xs: 1, md: 0},
            mr: {xs: 0, md: 1},
          }}
        >
          <Image
            src="https://picsum.photos/1000"
            alt=""
            layout="fill"
            objectFit="cover"
            style={{borderRadius: 5}}
          />
          <Box sx={{position: 'absolute', bottom: '8%', left: '8%'}}>
            <Typography
              sx={{
                mb: 2,
              }}
            >
              Lorem ipsum dolor sir amet
            </Typography>
            <Button variant="contained" sx={{borderRadius: 50}}>
              shop
            </Button>
          </Box>
        </Box>

        <Box sx={{position: 'relative', width: 1, height: 500}}>
          <Image
            src="https://picsum.photos/1000"
            alt=""
            layout="fill"
            objectFit="cover"
            style={{borderRadius: 5}}
          />
          <Box sx={{position: 'absolute', bottom: '8%', left: '8%'}}>
            <Typography
              sx={{
                mb: 2,
              }}
            >
              Lorem ipsum dolor sir amet
            </Typography>
            <Button variant="contained" sx={{borderRadius: 50}}>
              shop
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Featured
