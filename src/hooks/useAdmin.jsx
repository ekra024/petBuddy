import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
  const {user, loading} = useAuth();
  const axiosSecure = useAxiosSecure();
 
  
  const {data: isAdmin, isLoading} = useQuery({
    queryKey:['isAdmin', user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async() => {
      try{
        const res = await axiosSecure.get(`/users/admin/${user.email}`)
      return res.data.admin;
      } catch(err) {
        if(err.response?.status === 403) {
          return false;
        }
        throw err;
      }  
    }
  })

  const role = isAdmin ?"admin":"user";
  return [role, isLoading];
};

export default useAdmin;