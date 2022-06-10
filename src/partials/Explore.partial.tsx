import {Button} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Link from '../Link'

const Explore = () => {
  return (
    <Box sx={{mb: 6, mt: 6}}>
      {/* <Typography variant="body1" sx={{mb: 1, fontWeight: 600}}>
        Lorem ipsum
      </Typography> */}
      <Box
        sx={{
          mb: 2,
          fontSize: {xs: 48, md: 64},
          fontWeight: 'bold',
          lineHeight: 0.8,
          mt: 2,
        }}
      >
        LOOKBOOK
      </Box>
      <Typography variant="body1" sx={{mb: 2}}>
        Lookbook & catalogue Pitfalls Design Official
      </Typography>
      <Button
        variant="contained"
        sx={{borderRadius: 50}}
        component={Link}
        href="/product"
      >
        explore our products
      </Button>
    </Box>
  )
}

export default Explore
