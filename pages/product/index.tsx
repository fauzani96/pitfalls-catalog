import {Chip, Container, Icon, IconButton, Typography} from '@mui/material'
import {Box} from '@mui/system'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {FC} from 'react'
import {Category} from '../../src/constants/Category.constant'
import {product} from '../../src/constants/Product.constant'
import prisma from '../../lib/prisma'
import {GetStaticProps} from 'next'

interface Product {
  id: number
  categoryId: number
  price: number
  name: string
}

type Props = {
  productData: Product
}

export const getStaticProps: GetStaticProps = async () => {
  const productData = await prisma.product.findMany({})
  return {props: {productData}}
}

const Product: FC<Props> = ({productData}) => {
  console.log(productData)
  const router = useRouter()
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
        {Array.from({length: 4}).map((res, i) => {
          return (
            <Chip
              key={i}
              label={`Category-${i}`}
              color={i % 2 === 0 ? 'primary' : 'secondary'}
              sx={{m: 1}}
            />
          )
        })}
      </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        {product.map((prod, i) => (
          <Box
            sx={{width: {xs: 1 / 2, md: 1 / 4}, p: 1, mb: 1, cursor: 'pointer'}}
            key={i}
            onClick={() => router.push(`/product/${i}`)}
          >
            <Box sx={{position: 'relative', height: 200}}>
              <Image
                src="https://picsum.photos/1200"
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
                  {Category[prod.category]}
                </Typography>
              </div>
              <Typography variant="h6">$20.00</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Product
