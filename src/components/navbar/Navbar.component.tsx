import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import {Box, Button, Container, Icon, IconButton, Toolbar} from '@mui/material'
import {alpha, styled} from '@mui/material/styles'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {pages} from '../../constants/Pages.constant'
import HideOnScroll from '../../hooks/HideonScroll.hook'
import Link from '../../Link'
import MenuMobile from './menu/Menu.component'
import {useRouter} from 'next/router'
import Searchs from './search/Search.component'

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const Navbar = () => {
  const [searchMobile, setSearchMobile] = useState<boolean | HTMLElement>(false)
  const router = useRouter()
  const handleSearchMobile = () => setSearchMobile((prev) => !prev)
  useEffect(() => {
    setSearchMobile(false)
  }, [router.pathname])

  return (
    <>
      <HideOnScroll>
        <Box
          sx={{
            position: 'fixed',
            zIndex: 1,
            background: 'white',
            width: '100%',
            boxShadow: 1,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Link href="/">
                <>
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width="125"
                    height="40"
                    objectFit="contain"
                  />
                </>
              </Link>
              <Box sx={{ml: 1, flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page, i) => (
                  <Button
                    key={i}
                    sx={{my: 2, mx: 1}}
                    component={Link}
                    href={page.href}
                    variant={
                      router.pathname.includes(page.href) ? 'contained' : 'text'
                    }
                    size="small"
                    startIcon={<Icon>{page.icon}</Icon>}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
              <Box sx={{flexGrow: 4}} />
              <Box sx={{flexGrow: 0}}>
                <Search sx={{display: {xs: 'none', md: 'block'}}}>
                  <Searchs />
                </Search>
              </Box>
              <Box
                sx={{
                  flexGrow: 0,
                  visibility: {xs: 'visible', md: 'hidden'},
                  display: 'flex',
                }}
              >
                {searchMobile ? (
                  <>
                    <Search>
                      <Searchs />
                    </Search>
                    <IconButton onClick={handleSearchMobile} size="small">
                      <CloseIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <IconButton onClick={handleSearchMobile} size="small">
                      <SearchIcon />
                    </IconButton>
                    <MenuMobile />
                  </>
                )}
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}

export default Navbar
