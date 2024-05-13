import React, { useEffect } from 'react'
import  LOGO  from '../assets/online-shop_3176363.png';
import { useDispatch, useSelector } from 'react-redux';
import cart from "../assets/shopping-cart.png"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { removeUserData } from '../utils/userSlice';
import {useNavigate} from "react-router-dom"


const Header = () => {
  const user = useSelector(store => store?.user?.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogOut = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUserData());
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  const handleOrders = ()=>{
    navigate("/orders");
  }
  const handleCart = ()=>{
    navigate("/cart");
  }
  const handleAccount=()=>{
    navigate("/account")
  }
  const handleHome=()=>{
    navigate("/home")
  }
  return (
    <div className='flex justify-between w-screen p-2 bg-sky-700 '>
      <img onClick={handleHome} className='w-7' src={LOGO} alt="logo" />
     <div className='flex px-2'>
     <p onClick={handleAccount} className='px-3 font-bold text-sm'>Hello{user?.displayName}</p>
      <p className='px-3 font-bold text-sm' onClick={handleOrders}>Orders</p>
      <img onClick={handleCart} src={cart} alt="Cart" className='w-6' />
      <p className='px-3 font-bold text-sm' onClick={LogOut}>SignOut</p>
     </div>
    </div>
  )
}

export default Header