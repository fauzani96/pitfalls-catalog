import * as React from 'react'
import type {NextPage} from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

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
