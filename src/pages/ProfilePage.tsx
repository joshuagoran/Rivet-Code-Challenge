import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress, Container } from '@mui/material'
import { getProfile } from '../helpers/profileHelpers'
import { Profile } from '../types'
import ProfileForm from '../components/ProfileForm'

export default function ProfilePage() {
  const params = useParams()
  const [profile, setProfile] = useState<Profile>()

  const initialProfile: Profile = {
    id: undefined,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    photo: undefined,
    notes: '',
  }

  useEffect(() => {
    async function loadData() {
      if (params.id) {
        setProfile(await getProfile(Number(params.id)))
      } else {
        setProfile(initialProfile)
      }
    }
    loadData()
  }, [])

  console.log(profile)

  return profile ? (
    <ProfileForm {...profile} />
  ) : (
    <Box sx={{ display: 'flex', marginTop: '5rem', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
}
