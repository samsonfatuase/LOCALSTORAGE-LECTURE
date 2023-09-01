import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

export default function DashBoard() {
  return (
    <>
    <div>DashBoard</div>
    <NavBar />
    <Outlet />
    
    
    </>
    
  )
}
