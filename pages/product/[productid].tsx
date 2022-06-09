import {
  Box,
  Button,
  Container,
  Dialog,
  Fab,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import Images from '../../src/components/image/Image.component'
import {size} from '../../src/constants/Size.constant'

const DetailProduct = () => {
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter()
  const [url, setUrl] = useState('https://picsum.photos/1200')
  const handleOpen = () => setOpen(!open)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

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

      <Box sx={{display: {xs: 'block', md: 'flex'}, mt: 4}}>
        <Box sx={{width: {md: 3 / 4}}}>
          <Images
            url={url}
            height={300}
            otherSx={{
              mb: 4,
              width: 1,
            }}
          />
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
                      border: url === _url ? '2px solid' : 0,
                      borderRadius: 2,
                    }}
                  />
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box sx={{width: {md: 1 / 4}, pl: {md: 4}}}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" sx={{mr: 2}}>
              Size
            </Typography>
            <Button size="small" variant="contained" onClick={handleOpen}>
              Chart
            </Button>
          </Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            {size.map((res, i) => (
              <Box sx={{width: {xs: 1 / 2, md: 1}, mt: 2, mr: {md: 1}}} key={i}>
                <Typography gutterBottom>{res.size}</Typography>
                <Typography variant="body2" color="secondary">
                  Width : {res.width} cm
                </Typography>
                <Typography variant="body2" color="secondary">
                  Height : {res.height} cm
                </Typography>
                <Typography variant="body2" color="secondary">
                  Sleeve Length : {res.sleeve} cm
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleOpen} fullScreen={fullScreen}>
        <Fab
          onClick={handleOpen}
          color="primary"
          sx={{position: 'absolute', top: '2%', right: '2%'}}
        >
          <Icon>close</Icon>
        </Fab>
        <Box sx={{p: 2}}>
          <Image
            src="https://cf.shopee.co.id/file/bbd119c2f0963590a6233f88d89c9a9e"
            height={700}
            width={700}
          />
        </Box>
      </Dialog>
    </Container>
  )
}

export default DetailProduct
