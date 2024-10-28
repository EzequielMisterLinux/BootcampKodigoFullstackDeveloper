import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Home from './Home'

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
