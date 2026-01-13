import React from 'react';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import LoaddingPage from '../Loading/LoaddingPage';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
  const {user, loading} = useAuth();
   const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();



  if(loading || isLoading) return <LoaddingPage /> 

  if(!user || !isAdmin) return <Navigate state={location.pathname} to="/forbidden" />
  return children;
};

export default AdminRoute;