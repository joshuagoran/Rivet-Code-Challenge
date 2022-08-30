import { Profile } from '../types'

// in production, this would be handled via an environment variable or other measure to keep tokens out of source code
// it would also be prudent to use some sort of expiring token (maybe JWT or similar) if we were concerned about malicious API use
const API_ACCESS_TOKEN = 'a82812ca421176395bc719a0f80ec3a4196b45acb80fe5d209967f070ff75f0c'

const PROFILE_URL = 'https://codechallenge.rivet.work/api/v1/profile/'

export async function getProfiles() {
  const PROFILES_URL = 'https://codechallenge.rivet.work/api/v1/profiles'

  return (
    await fetch(PROFILES_URL, {
      headers: {
        token: API_ACCESS_TOKEN,
      },
    })
  ).json()
}

export async function getProfile(id: number) {
  return (
    await fetch(`${PROFILE_URL}/${id}`, {
      headers: {
        token: API_ACCESS_TOKEN,
      },
    })
  ).json()
}

export async function upsertProfile(profileData: Profile) {
  // if an id is present in the data, treat it as an update
  if (profileData.id) {
    return fetch(`${PROFILE_URL}/${profileData.id}`, {
      method: 'PUT',
      headers: {
        token: API_ACCESS_TOKEN,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(profileData),
    })
  } else {
    // if no id, insert new profile
    return fetch(`${PROFILE_URL}`, {
      method: 'POST',
      headers: {
        token: API_ACCESS_TOKEN,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(profileData),
    })
  }
}
