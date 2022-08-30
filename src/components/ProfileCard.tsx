import * as React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { Profile } from '../types'
import { Tooltip } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import DescriptionIcon from '@mui/icons-material/Description'

export default function ProfileCard(profile: Profile) {
  const { id, first_name, last_name, phone, email, address, city, state, zip, photo, notes } = profile

  return (
    <Card variant="outlined" sx={{ height: 250, width: 425, margin: '1rem' }}>
      <Link to={`/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <Tooltip title="Click to view and edit!" followCursor>
          <CardActionArea sx={{ display: 'flex' }}>
            {photo ? (
              <CardMedia component="img" height="250" image={photo} alt={`${first_name} ${last_name} profile image`} />
            ) : (
              <AccountBoxIcon sx={{ color: 'gray', fontSize: 225, width: 250 }} />
            )}
            <CardContent sx={{ width: '70%' }}>
              <Typography sx={{ fontSize: '2rem' }} color="text.secondary" gutterBottom></Typography>

              <Typography variant="h5" component="div">
                {first_name}
                <br />
                {last_name}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {phone}
              </Typography>

              <Typography variant="body2">
                {email}
                <br />
                {address}
                <br />
                {city}, {state}
                <br />
                {zip}
              </Typography>

              {notes && <DescriptionIcon />}
            </CardContent>
          </CardActionArea>
        </Tooltip>
      </Link>
    </Card>
  )
}
