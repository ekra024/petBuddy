import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const MyAddedPets = () => {

  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const {data:pets=[], isLoading} = useQuery({
    queryKey: ['userPets', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get('/pets');
      return res.data;
    }
  })

  if(isLoading) <h1>...Loading</h1>
  return (
    <div>
      
    </div>
  );
};

export default MyAddedPets;