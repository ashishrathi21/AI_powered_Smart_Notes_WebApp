import React from 'react'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App