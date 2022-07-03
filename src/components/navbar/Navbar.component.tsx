import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import {Box, Button, Container, Icon, IconButton, Toolbar} from '@mui/material'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {pages} from '../../constants/Pages.constant'
import HideOnScroll from '../../hooks/HideonScroll.hook'
import Link from '../../Link'
import MenuMobile from './menu/Menu.component'
import Searchs from './search/Search.component'

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
                    // startIcon={<Icon>{page.icon}</Icon>}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
              <Box sx={{flexGrow: 4}} />
              <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'block'}}}>
                <Searchs />
              </Box>
              <Box
                sx={{
                  flexGrow: 0,
                  visibility: {xs: 'visible', md: 'hidden'},
                  display: 'flex',
                  ml: 1,
                }}
              >
                {searchMobile ? (
                  <>
                    <Searchs />

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
