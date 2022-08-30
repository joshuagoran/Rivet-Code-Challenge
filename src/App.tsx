import * as React from 'react'
import { useEffect, useState } from 'react'
import { getProfiles } from './helpers/profileHelpers'
import { Profile } from './types'
import { Home } from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'

export function App() {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    async function loadData() {
      setProfiles(await getProfiles())
    }
    loadData()
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
        <Route path=":id" element={<ProfilePage />} />
        <Route path="/addUser" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}
