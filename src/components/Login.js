import React, { useState } from 'react'

const Login = () => {
    const [isSignIn, setisSignIn]= useState(true);
    const handleSignIn = ()=>{
        setisSignIn(!isSignIn);
    }
  return (
    <div className='flex h-screen w-screen'>
        <div className='w-3/4 bg-pink-200'>
            <p>img</p>
        </div>
        <div className='w-2/4 p-32 bg-blue-300  '>
            <form onClick={(e)=> e.preventDefault()}  >
                <p className=' font-bold text-3xl my-6 '>{isSignIn ? "Sign In" : "Sign Up"}</p>
                {!isSignIn && <input type="text" placeholder='Enter Name:' className='w-full p-3 my-3 rounded-md'/>}
                <input type='email' placeholder='Enter email' className='w-full p-3 my-3 rounded-md'/>
                {!isSignIn &&  <input type="Number" placeholder="Enter Mobile Number" className='w-full p-3 my-3 rounded-md'/>}
                <input type="password" placeholder='Enter Password'  className='w-full p-3 rounded-md'/>
                <button className='w-full p-3 my-8 rounded-lg bg-blue-200'> {!isSignIn ? "Sign Up " : "Sign In"}</button>
               <div className='flex justify-between'>
               <p className='text-gray cursor-pointer my-3'>Sign in Using Mobile</p>
                <p className='text-gray cursor-pointer my-3' onClick={handleSignIn}>{isSignIn ? "SignUp " : "SignIn"}</p>
               </div>
                
            </form>
        </div>
    </div>
  )
}

export default Login