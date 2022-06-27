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
import React, {useEffect, useState} from 'react'
import Images from '../../src/components/image/Image.component'
import {Category} from '../../src/constants/Category.constant'
import {detailHoodie, detailShirt} from '../../src/constants/Detail.constant'
import {productData} from '../../src/constants/Product.constant'
import {hoodieSize, size} from '../../src/constants/Size.constant'
import {convertToRoundedRupiah} from '../../src/utils/helper.util'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'

const DetailProduct = () => {
  const router = useRouter()

  const {productid} = router.query
  // @ts-ignore
  const item = productData.find((x) => x.id === parseInt(productid))
  const [open, setOpen] = useState<boolean>(false)
  const [url, setUrl] = useState('')
  const handleOpen = () => setOpen(!open)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    if (item) {
      setUrl(item.imgSrc?.[0])
    }
  }, [item])

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
          {item?.name}
        </Typography>
      </Box>

      <Box sx={{display: 'flex'}}>
        <Box>
          <Typography variant="body1" gutterBottom>
            {item && Category[item.categoryId]}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {item && convertToRoundedRupiah(item.price, false)}
          </Typography>
        </Box>
      </Box>

      <Box sx={{display: {xs: 'block', md: 'flex'}, mt: 4}}>
        <Box sx={{width: {md: 3 / 4}}}>
          {url && (
            <Images
              url={url}
              height={isMobile ? 350 : 600}
              objectFit="contain"
              otherSx={{
                mb: 4,
                width: 1,
              }}
            />
          )}
          <Box sx={{display: 'flex', justifyContent: 'center', mb: 4}}>
            {item?.imgSrc.map((res, i) => {
              const _url = res
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
        <Box sx={{width: {md: 1 / 4}, pl: {md: 4}, mb: 4}}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 50,
              width: 1,
              position: 'sticky',
              bottom: 20,
              mb: {xs: 4, md: 8},
              height: 50,
            }}
          >
            buy now <LocalGroceryStoreIcon sx={{ml: 1}} />
          </Button>
          <Typography variant="h6" paragraph>
            Details
          </Typography>

          {(item?.categoryId === 3 ? detailHoodie : detailShirt).map(
            (res, i) => (
              <Typography gutterBottom key={i}>
                - {res}
              </Typography>
            )
          )}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: {xs: 4, md: 8},
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
            {(item?.categoryId === 3 ? hoodieSize : size).map((res, i) => (
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
      <Dialog open={open} onClose={handleOpen} fullWidth={isMobile}>
        <Fab
          onClick={handleOpen}
          color="primary"
          sx={{position: 'absolute', top: '2%', right: '2%'}}
        >
          <Icon>close</Icon>
        </Fab>
        <Box sx={{p: 2}}>
          <Image
            src={
              item?.categoryId === 3
                ? '/images/hoodiesize.jpeg'
                : '/images/shirtsize.jpeg'
            }
            height={700}
            width={700}
          />
        </Box>
      </Dialog>
    </Container>
  )
}

export default DetailProduct
