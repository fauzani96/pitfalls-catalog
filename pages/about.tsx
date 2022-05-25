import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type {NextPage} from 'next'
import * as React from 'react'

const About: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box maxWidth="sm">
          {/* <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button> */}
        </Box>
      </Box>
    </Container>
  )
}

export default About
