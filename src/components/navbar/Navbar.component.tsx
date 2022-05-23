import AdbIcon from '@mui/icons-material/Adb'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material'
import {alpha, styled} from '@mui/material/styles'
import React from 'react'
import {pages} from '../../constants/Pages.constant'
import HideOnScroll from '../../hooks/HideonScroll.hook'
import MenuMobile from './menu/Menu.component'

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
  return (
    <>
      <HideOnScroll>
        <Box
          sx={{
            position: 'fixed',
            zIndex: 1,
            background: 'white',
            width: '100%',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              {/* <Box sx={{position: 'relative', width: 200}}>
                
              </Box> */}

              <img
                src="/images/logo.png" // Route of the image file
                alt="Logo"
                width="125"
              />
              <Box sx={{ml: 1, flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                  <Button key={page} sx={{my: 2, display: 'block'}}>
                    {page}
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
