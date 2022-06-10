import SearchIcon from '@mui/icons-material/Search'
import {
  alpha,
  Autocomplete,
  Fade,
  InputBase,
  Paper,
  styled,
  Typography,
} from '@mui/material'
import {Box} from '@mui/system'
import {useRouter} from 'next/router'
import React, {useEffect, useRef} from 'react'
import {Category} from '../../../constants/Category.constant'
import {productData} from '../../../constants/Product.constant'
import UseOnClickOutside from '../../../hooks/OutsideAlerter.hook'
import Images from '../../image/Image.component'

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

const Searchs = () => {
  const [value, setValue] = React.useState<string>('')

  const router = useRouter()
  useEffect(() => {
    setValue('')
  }, [router.pathname, router.query])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const squareBoxRef = useRef<HTMLDivElement>(null)
  const clickOutsidehandler = () => {
    setValue('')
  }

  UseOnClickOutside(squareBoxRef, clickOutsidehandler)

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={value}
          onChange={handleSearch}
        />
      </Search>
      {/* {value && (
        
      )} */}
      <Fade in={value !== ''}>
        <Paper
          sx={{position: 'absolute', width: '26.7ch', mt: {xs: 6, md: 2}}}
          ref={squareBoxRef}
        >
          {productData
            .filter((prod) =>
              prod.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((prod, i) => {
              return (
                <Box
                  sx={{display: 'flex', p: 1, cursor: 'pointer'}}
                  key={i}
                  onClick={() => router.push(`/product/${prod.id}`)}
                >
                  <Images
                    url={prod.imgSrc}
                    height={50}
                    objectFit="contain"
                    otherSx={{
                      mr: 1,
                      width: 50,
                    }}
                  />
                  <div>
                    <Typography>{prod.name}</Typography>
                    <Typography variant="body2" color="secondary">
                      {Category[prod.categoryId]}
                    </Typography>
                  </div>
                </Box>
              )
            })}
        </Paper>
      </Fade>
    </>
  )
}

export default Searchs
