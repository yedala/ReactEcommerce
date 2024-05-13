import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { LOGO } from '../utils/constants';



const Initial = () => {
  const dispatch = useDispatch();

  const user = useSelector(store => store?.user?.userData)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUserData({ uid: uid, email: email, displayName: displayName }));

        } else {
            
        }
    });
    return ()=> unsubscribe();
}, []);
  return (
    <div>
      
    </div>
  )
}

export default Initial