import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password);
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updatedUserProfile = (userProfile) => {
   return updateProfile(auth.currentUser, userProfile);
  }

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  }

  const logoutUser = async() => {
    setLoading(true);

    await signOut(auth);                    

    localStorage.clear(); 
    sessionStorage.clear();                  
  
    setUser(null);
    setLoading(false);

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, curUser => {
      setUser(curUser);
      setLoading(false);
    })
    return () => unsubscribe();
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    updatedUserProfile,
    logoutUser,
    googleLogin,
  }

  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;