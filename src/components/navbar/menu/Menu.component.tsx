import AppsIcon from '@mui/icons-material/Apps'
import {IconButton, Menu, MenuItem, Typography} from '@mui/material'
import React from 'react'
import {pages} from '../../../constants/Pages.constant'

const MenuMobile = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <>
      <IconButton onClick={handleOpenUserMenu} size="small">
        <AppsIcon />
      </IconButton>
      <Menu
        sx={{mt: '45px'}}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MenuMobile
