import React from 'react'
import Login from './Login'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Home'
import AccountSettings from './AccountSettings'
import Orders from "./Orders"
import Cart from "./Cart"
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';

const Body = () => {
   const user = useSelector(store => store?.user?.userData) || null;
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
    {user && <Header/> }
    <RouterProvider router={appRoutes} />
    </>
  
  )
}

export default Body