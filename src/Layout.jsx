import React from 'react'
import Header from './hc_components_router/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './hc_components_router/Footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default Layout