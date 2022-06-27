import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from './Link'
import {Box} from '@mui/material'
import Image from 'next/image'

export default function Copyright() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        mt: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 125,
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <a href="https://www.instagram.com/pitfalls_design/" target="_blank" rel="noreferrer">
          <Image src="/images/instagram.svg" width="25" height="25" />
        </a>
        <a href="https://shopee.co.id/pitfalls_official_design" target="_blank" rel="noreferrer">
          <Image src="/images/shopee.svg" width="25" height="25" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=6281387557003"
          target="_blank" rel="noreferrer"
        >
          <Image src="/images/whatsapp.svg" width="25" height="25" />
        </a>
        <a href="https://www.tokopedia.com/pitfalls" target="_blank" rel="noreferrer">
          <Image src="/images/tokped.png" width="25" height="25" />
        </a>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{p: 2}}
      >
        {'Copyright © '}
        <Link href="/">Pitfalls</Link> {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}
