import React from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../Pages/LoginPage'

export default function PrivateRoutes({children}){
  
    const {auth} = useSelector((state)=>state.userReducer)

      return auth ? children : <LoginPage />;  
    
}
