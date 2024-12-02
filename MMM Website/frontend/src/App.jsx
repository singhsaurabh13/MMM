import React from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Client/Navbar'
import Footer from './component/Client/Footer'

function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
