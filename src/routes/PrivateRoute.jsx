import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {user, loading} = useAuth();
  const location = useLocation();


  if(loading) return <progress className="progress w-56"></progress>
  else if(user && user?.email) return children;
  return <Navigate state={location.pathname} to='/signIn'></Navigate>
};

export default PrivateRoute;