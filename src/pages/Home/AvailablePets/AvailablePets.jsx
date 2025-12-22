import React from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import SinglePet from './SinglePet';

const AvailablePets = () => {

  const axios = useAxios();

  const {data: pets = [], isLoading } = useQuery({
    queryKey: ['availablePets'],
    queryFn: async() => {
      const res = await axios.get('/pets/available');
      return res.data;
    }
  });
  console.log(pets);

  if(isLoading) <h2>Loading...</h2>
  return (
    <div className='w-full bg-[#002169] px-25 py-40 text-center'>
      <h1 className='text-3xl font-semibold text-white ' >Available Pets For Adoption</h1>
      <p className='plus text-[#8FA5D6] px-5 '>We will work with you to develop individualised care plans, including management chronic diseases </p>
      <div>
        {
          pets.map(pet => <SinglePet key={pet._id} pet={pet}></SinglePet> )
        }
      </div>
    </div>
  );
};

export default AvailablePets;