import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import SignupPage from '../Pages/SignupPage'
import LoginPage from '../Pages/LoginPage'
import NotesPage from '../Pages/NotesPage'
import PrivateRoutes from './PrivateRoutes'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/register' element={<SignupPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/notes' element={<PrivateRoutes><NotesPage/></PrivateRoutes>} />
      </Routes>
  )
}

export default AllRoutes