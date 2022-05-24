import {Button} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const Explore = () => {
  return (
    <Box sx={{mb: 6}}>
      <Typography variant="body1" sx={{mb: 1, fontWeight: 600}}>
        Lorem ipsum
      </Typography>
      <Box
        sx={{
          mb: 2,
          fontSize: {xs: 48, md: 64},
          fontWeight: 'bold',
          lineHeight: 0.8,
        }}
      >
        Bold like before.
        <br />
        Build for the next.
      </Box>
      <Typography variant="body1" sx={{mb: 2}}>
        Lorem ipsum dolor sir amert. Lorem ipsum dolor sir amert.Lorem ipsum
        dolor sir amert
      </Typography>
      <Button variant="contained" sx={{borderRadius: 50}}>
        explore our products
      </Button>
    </Box>
  )
}

export default Explore
