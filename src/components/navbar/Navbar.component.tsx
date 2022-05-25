import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  InputBase,
  Toolbar,
} from '@mui/material'
import {alpha, styled} from '@mui/material/styles'
import Image from 'next/image'
import React from 'react'
import {pages} from '../../constants/Pages.constant'
import HideOnScroll from '../../hooks/HideonScroll.hook'
import Link from '../../Link'
import MenuMobile from './menu/Menu.component'
import {useRouter} from 'next/router'

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

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Navbar = () => {
  const router = useRouter()
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
              {/* <img
                src="/images/logo.png" // Route of the image file
                alt="Logo"
                width="125"
              /> */}
              <Box sx={{ml: 1, flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page, i) => (
                  <Button
                    key={i}
                    sx={{my: 2, mx: 1}}
                    component={Link}
                    href={page.href}
                    variant={
                      router.pathname === page.href ? 'contained' : 'text'
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
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                  />
                </Search>
              </Box>
              <Box
                sx={{flexGrow: 0, visibility: {xs: 'visible', md: 'hidden'}}}
              >
                <IconButton size="small">
                  <SearchIcon />
                </IconButton>

                <MenuMobile />
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
