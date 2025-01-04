import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

const Root = () => {
  return (
    <div>
        <Home/>
        <Outlet/>
    </div>
  )
}

export default Root