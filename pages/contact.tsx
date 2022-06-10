import {Container, Fab, Icon, IconButton, Typography} from '@mui/material'
import {Box} from '@mui/system'
import {useRouter} from 'next/router'
import React from 'react'

const linkStyle = {
  display: 'flex',
  marginBottom: 12,
  fontSize: '1.25rem',
  alignItems: 'center',
}

const Contact = () => {
  const router = useRouter()
  return (
    <Container maxWidth="lg" sx={{mb: 4, mt: 3}}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <IconButton color="primary" onClick={router.back}>
          <Icon>arrow_back</Icon>
        </IconButton>
        <Typography variant="h5" sx={{fontWeight: 600, ml: 1}}>
          Contact
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mt: 6,
        }}
      >
        <Typography variant="h6" sx={{mb: 6}} align="center">
          For general enquiries please contact:
        </Typography>

        <a href="mailto:pitfalls.official@gmail.com" style={linkStyle}>
          <Fab color="primary" size="small" sx={{mr: 1}}>
            <Icon>mail</Icon>
          </Fab>{' '}
          pitfalls.official@gmail.com
        </a>
        <a href="mailto:pitfalls017@gmail.com" style={linkStyle}>
          <Fab color="primary" size="small" sx={{mr: 1}}>
            <Icon>mail</Icon>
          </Fab>{' '}
          pitfalls017@gmail.com
        </a>
        <a href="https://pitfallsdesign.com" style={linkStyle}>
          <Fab color="primary" size="small" sx={{mr: 1}}>
            <Icon>language</Icon>
          </Fab>{' '}
          pitfallsdesign.com
        </a>
        <a href="tel:+6281387557003" style={linkStyle}>
          <Fab color="primary" size="small" sx={{mr: 1}}>
            <Icon>call</Icon>
          </Fab>{' '}
          +6281387557003
        </a>
        <div style={linkStyle}>
          <Fab color="primary" size="small" sx={{mr: 1}}>
            <Icon>message</Icon>
          </Fab>{' '}
          +6282241078240
        </div>
      </Box>
      {/* </Box> */}
      {/* <Typography component="a" href="mailto:pitfalls.official@gmail.com">
        pitfalls.official@gmail.com
      </Typography>
      <Typography>pitfalls017@gmail.com</Typography>
      <Typography>Info: www.pitfallsdesign.com</Typography>
      <Typography>Text +6281387557003 / +6282241078240</Typography> */}
    </Container>
  )
}

export default Contact
