import * as React from 'react'
import { Box, CircularProgress } from '@mui/material'
import ProfileCard from '../components/ProfileCard'
import { Profile } from '../types'

export function Home({ profiles }) {
  profiles.sort((a: Profile, b: Profile) => a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase()))

  const profileCards = profiles.map((profile: Profile) => <ProfileCard {...profile} key={profile.id} />)

  return profiles ? (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{profileCards}</Box>
  ) : (
    <CircularProgress />
  )
}
