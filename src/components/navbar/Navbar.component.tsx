import React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import HideOnScroll from '../../hooks/HideonScroll.hook'
import SearchIcon from '@mui/icons-material/Search'
import {styled, alpha} from '@mui/material/styles'

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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

const pages = ['Products', 'Pricing', 'Blog']

const Navbar = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Container maxWidth="lg" sx={{display: 'block'}}>
            <Toolbar disableGutters>
              <AdbIcon sx={{display: 'flex', mr: 1}} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: 'flex',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{my: 2, color: 'white', display: 'block'}}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{flexGrow: 4}} />
              <Box sx={{flexGrow: 1}}>
                <SearchIcon />
                {/* <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                  />
                </Search> */}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}

export default Navbar
