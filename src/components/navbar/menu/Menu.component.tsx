import AppsIcon from '@mui/icons-material/Apps'
import {Icon, IconButton, Menu, MenuItem} from '@mui/material'
import {useRouter} from 'next/router'
import React from 'react'
import {pages} from '../../../constants/Pages.constant'
import Link from '../../../Link'

const MenuMobile = () => {
  const router = useRouter()
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
        {pages.map((page, i) => (
          <MenuItem
            key={i}
            onClick={handleCloseUserMenu}
            component={Link}
            href={page.href}
            sx={{
              color: router.pathname.includes(page.href)
                ? 'text.primary'
                : 'text.secondary',
            }}
          >
            {/* <Icon sx={{mr: 1}}>{page.icon}</Icon> */}
            {page.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MenuMobile
