import React from 'react'
import Login from './Login'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Home'
import AccountSettings from './AccountSettings'
import Orders from "./Orders"
import Cart from "./Cart"
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import Initial from './Initial'

const Body = () => {
   const appRoutes = createBrowserRouter([
    {
      path:"/",
      element: <Login />
    },
    {
      path:"/home",
      element: <Home />
    },
    {
      path: "account",
      element: <AccountSettings />
    },
    {
      path: "orders",
      element: <Orders />
    },
    {
      path:"cart",
      element: <Cart />
    }
   ])
  return (
    <>
    <Initial />
    <RouterProvider router={appRoutes} />
    </>
  
  )
}

export default Body