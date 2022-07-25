import {
  // Button,
  Chip,
  Container,
  Divider,
  Icon,
  IconButton,
  Typography,
} from '@mui/material'
import {Box} from '@mui/system'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {FC, useState} from 'react'
import {Category, categoryData} from '../../src/constants/Category.constant'
// import prisma from '../../lib/prisma'
import {GetStaticProps} from 'next'
import {convertToRoundedRupiah} from '../../src/utils/helper.util'
import {productData} from '../../src/constants/Product.constant'

export type ProductType = {
  id: number
  categoryId: number
  price: number
  name: string
  imgSrc: string[]
}

type CategoryType = {id: number; name: string}

type Props = {
  productData: ProductType[]
  categoryData: CategoryType[]
}

export const getStaticProps: GetStaticProps = () => {
  return {props: {productData, categoryData}}
}

const Product: FC<Props> = ({productData, categoryData}) => {
  const [selectedCat, setCat] = useState<number | false>(false)
  const router = useRouter()

  // const submitData = async () => {
  //   try {
  //     const body = {
  //       name: 'asd',
  //       categoryId: 1,
  //       imgSrc: 'https://picsum.photos/200/300',
  //       price: 140000,
  //     }
  //     await fetch('/api/product', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(body),
  //     })
  //     // await Router.push('/drafts')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const handleCategory = (id: number) => {
    setCat(() => (id === selectedCat ? false : id))
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        mb: 4,
        mt: 3,
      }}
    >
      {/* <Button variant="contained" onClick={submitData}>
        Post
      </Button> */}
      <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
        <IconButton color="primary" onClick={router.back}>
          <Icon>arrow_back</Icon>
        </IconButton>
        <Typography variant="h5" sx={{fontWeight: 600, ml: 1}}>
          Product
        </Typography>
      </Box>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          overflow: 'auto',
        }}
      >
        {categoryData.map((categ, i) => {
          return (
            <Chip
              key={i}
              label={categ.name}
              color={selectedCat === categ.id ? 'primary' : 'secondary'}
              sx={{m: 1}}
              onClick={() => handleCategory(categ.id)}
            />
          )
        })}
      </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        {productData
          .filter((i) => (selectedCat ? i.categoryId === selectedCat : i))
          .map((prod: ProductType, i: number) => {
            return (
              <Box
                sx={{
                  width: {xs: 1 / 2, md: 1 / 4},
                  p: {xs: 1, md: 3},
                  mb: 1,
                  cursor: 'pointer',
                }}
                key={i}
                onClick={() => router.push(`/product/${prod.id}`)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                  }}
                >
                  <Image
                    src={prod.imgSrc?.[0]}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    style={{borderRadius: 10}}
                    placeholder="blur"
                    // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    blurDataURL={`/_next/image?url=${prod.imgSrc?.[0]}&w=16&q=1`}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: 'space-between',
                    mt: 1,
                  }}
                >
                  <div>
                    <Typography gutterBottom>{prod.name}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      {Category[prod.categoryId]}
                    </Typography>
                  </div>
                  <Typography variant="h6">
                    {convertToRoundedRupiah(prod.price, false)}
                  </Typography>
                </Box>
              </Box>
            )
          })}
      </Box>
    </Container>
  )
}

export default Product
