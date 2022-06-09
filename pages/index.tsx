import {Button} from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type {NextPage} from 'next'
import * as React from 'react'
import CarouselComponent from '../src/components/carousel/Carousel.component'
import Link from '../src/Link'
import Explore from '../src/partials/Explore.partial'
import Featured from '../src/partials/Featured.partial'
import Intermezzo from '../src/partials/Intermezzo.partial'

const Home: NextPage = () => {
  return (
    <>
      <Button
        sx={{
          p: 2,
          width: 1,
          borderRadius: 0,
        }}
        variant="contained"
        color="primary"
        component={Link}
        href="/product"
      >
        Happy & Enjoy Shopping
      </Button>
      <CarouselComponent />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
          }}
        >
          <Explore />
          <Featured />
          <Intermezzo />
        </Box>
      </Container>
    </>
  )
}

export default Home
