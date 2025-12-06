import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar.jsx';
const MainLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainLayouts