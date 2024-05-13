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
  return (
    <div className='flex justify-between w-screen p-2 bg-sky-700 '>
      <img className='w-7' src={LOGO} alt="logo" />
     <div className='flex px-2'>
     <p className='px-3 font-bold text-sm'>Hello{user?.displayName}</p>
      <p className='px-3 font-bold text-sm'>Orders</p>
      <img src={cart} alt="Cart" className='w-6' />
      <p className='px-3 font-bold text-sm' onClick={LogOut}>SignOut</p>
     </div>
    </div>
  )
}

export default Header