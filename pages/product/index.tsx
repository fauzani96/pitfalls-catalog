import {
  Button,
  Chip,
  Container,
  Icon,
  IconButton,
  Typography,
} from '@mui/material'
import {Box} from '@mui/system'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {FC, useState} from 'react'
import {Category} from '../../src/constants/Category.constant'
import {prisma} from '../../lib/prisma'
import {GetStaticProps} from 'next'
import {convertToRoundedRupiah} from '../../src/utils/helper.util'

type Product = {
  id: number
  categoryId: number
  price: number
  name: string
  imgSrc: string
}

type Category = {id: number; name: string}

type Props = {
  productData: Product[]
  categoryData: Category[]
}

export const getStaticProps: GetStaticProps = async () => {
  const productData = await prisma.product.findMany({})
  const categoryData = await prisma.category.findMany({})
  return {props: {productData, categoryData}}
}

const Product: FC<Props> = ({productData, categoryData}) => {
  console.log(categoryData)
  const [selectedCat, setCat] = useState<number | false>(false)
  const router = useRouter()

  const submitData = async () => {
    try {
      const body = {
        name: 'asd',
        categoryId: 1,
        imgSrc: 'https://picsum.photos/200/300',
        price: 140000,
      }
      await fetch('/api/product', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      })
      // await Router.push('/drafts')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        mb: 4,
        mt: 3,
      }}
    >
      <Button variant="contained" onClick={submitData}>
        Post
      </Button>
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
              onClick={() => setCat(categ.id)}
            />
          )
        })}
      </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        {productData.map((prod: Product, i: number) => {
          return (
            <Box
              sx={{
                width: {xs: 1 / 2, md: 1 / 4},
                p: 1,
                mb: 1,
                cursor: 'pointer',
              }}
              key={i}
              onClick={() => router.push(`/product/${i}`)}
            >
              <Box sx={{position: 'relative', height: 200}}>
                <Image
                  src={prod.imgSrc}
                  alt=""
                  objectFit="cover"
                  layout="fill"
                  style={{borderRadius: 10}}
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
