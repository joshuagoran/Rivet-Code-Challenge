import * as React from 'react'
import { Alert, Button, Container, Grid, Snackbar } from '@mui/material'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { Profile } from '../types'
import { upsertProfile } from '../helpers/profileHelpers'

import './ProfileForm.css'

export default function ProfileForm(profile: Profile) {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)

  const handleFormSubmit = (data: Profile) => {
    upsertProfile(data)

    setSnackbarOpen(true)
  }

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackbarOpen(false)
  }

  return (
    <Container>
      <div className="profile-container">
        {/* Currently not handling photo upload. If a photo isn't present, skip rendering that part of the page */}
        {profile.photo ? (
          <div className="profile-column-left">
            <img
              src={profile.photo}
              alt={`${profile.first_name} ${profile.last_name} profile image`}
              style={{ margin: '2rem auto', height: 'auto', width: '100%' }}
            />
            )
          </div>
        ) : null}
        <div className="profile-column-right">
          <FormContainer defaultValues={{ ...profile }} onSuccess={(data) => handleFormSubmit(data)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextFieldElement name="first_name" label="First Name" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldElement name="last_name" label="Last Name" required fullWidth />
              </Grid>

              <Grid item xs={12}>
                <TextFieldElement name="address" label="Address" required fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextFieldElement name="city" label="City" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldElement name="state" label="State" required fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextFieldElement name="zip" label="Zip" required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldElement name="phone" label="Phone" required fullWidth />
              </Grid>

              <Grid item xs={12}>
                <TextFieldElement name="email" label="Email" type="email" required fullWidth />
              </Grid>

              <Grid item xs={12}>
                <TextFieldElement name="notes" label="Notes" multiline rows={4} fullWidth />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" fullWidth>
                  Save
                </Button>
              </Grid>
            </Grid>
          </FormContainer>
        </div>
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          User profile updated!
        </Alert>
      </Snackbar>
    </Container>
  )
}
