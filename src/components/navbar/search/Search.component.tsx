import SearchIcon from '@mui/icons-material/Search'
import {Autocomplete, InputBase, styled} from '@mui/material'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import {Category} from '../../../constants/Category.constant'
import {product} from '../../../constants/Product.constant'

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}))

const Searchs = () => {
  const [value, setValue] = React.useState<any | null>(null)
  const [inputValue, setInputValue] = React.useState('')
  const router = useRouter()
  useEffect(() => {
    setValue(null)
    setInputValue('')
  }, [router.pathname])

  return (
    <>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <Autocomplete
        value={value}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        disablePortal
        disableClearable
        options={product}
        freeSolo
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) =>
          `${option.name} - ${Category[option.category]}`
        }
        sx={{width: 200}}
        onChange={(event: any, newValue: any | null) => {
          setValue(newValue)
          if (newValue) {
            router.push(`/product/${newValue.year}`)
          }
        }}
        renderInput={(params) => {
          const {InputLabelProps, InputProps, ...rest} = params
          return (
            <StyledInputBase
              {...params.InputProps}
              {...rest}
              placeholder="Search…"
            />
          )
        }}
      />
    </>
  )
}

export default Searchs
