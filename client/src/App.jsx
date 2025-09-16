import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/signup'
import Signin from './pages/signin'

function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
