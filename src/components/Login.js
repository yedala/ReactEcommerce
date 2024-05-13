import React, { useRef, useState } from 'react'
import validation from '../utils/validation';
import { useDispatch } from 'react-redux';
import { addUserData } from '../utils/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [isSignIn, setisSignIn] = useState(true);
    const [isErrmsg, setisErrmsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const changeSignIn = () => {
        setisSignIn(!isSignIn);
    }
    const handleSignIn = () => {
        const err = validation(email.current.value, password.current.value);
        setisErrmsg(err);
        if (err) return;
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName } = user;
                        dispatch(addUserData({ id: uid, email: email, displayName: displayName }));
                        navigate("/home")

                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setisErrmsg(errorCode + '' + errorMessage);
                    // ..
                });

        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const { uid, email, displaName } = user;
                    dispatch(addUserData({ id: uid, email: email, displaName: displaName }));
                    navigate('/home')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setisErrmsg(errorCode + '' + errorMessage);
                });

        }
    }
    return (
        <div className='flex h-screen w-screen'>
            <div className='w-3/4 bg-pink-200'>
                <p>img</p>
            </div>
            <div className='w-2/4 p-32 bg-blue-300  '>
                <form onClick={(e) => e.preventDefault()}  >
                    <p className=' font-bold text-3xl my-6 '>{isSignIn ? "Sign In" : "Sign Up"}</p>
                    {!isSignIn && <input ref={name} type="text" placeholder='Enter Name:' className='w-full p-3 my-3 rounded-md' />}
                    <input ref={email} type='email' placeholder='Enter email' className='w-full p-3 my-3 rounded-md' />
                    {!isSignIn && <input type="Number" placeholder="Enter Mobile Number" className='w-full p-3 my-3 rounded-md' />}
                    <input ref={password} type="password" placeholder='Enter Password' className='w-full p-3 rounded-md' />
                    <button onClick={handleSignIn} className='w-full p-3 my-8 rounded-lg bg-blue-200'> {!isSignIn ? "Sign Up " : "Sign In"}</button>
                    {isErrmsg && <span className='text-red-800 font-bold text-sm'>{isErrmsg}</span>}
                    <div className='flex justify-between'>
                        <p className='text-gray cursor-pointer my-3'>Sign in Using Mobile</p>
                        <p className='text-gray cursor-pointer my-3' onClick={changeSignIn}>{isSignIn ? "SignUp " : "SignIn"}</p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login