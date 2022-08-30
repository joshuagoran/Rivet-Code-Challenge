import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="home">
          <Link to={`/`} style={{ color: 'inherit' }}>
            <HomeIcon />
          </Link>
        </IconButton>
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          User Profile App
        </Typography>
        <Tooltip title="Add user">
          <Link to={`/addUser`} style={{ color: 'inherit' }}>
            <IconButton size="large" edge="end" color="inherit" aria-label="add user">
              <PersonAddIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}
