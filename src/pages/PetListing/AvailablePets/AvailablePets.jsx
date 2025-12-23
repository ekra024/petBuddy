import React, { useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import SinglePet from './SinglePet';

const AvailablePets = () => {

  const axios = useAxios();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const {data: pets = [], isLoading } = useQuery({
    queryKey: ['availablePets', search, category],
    queryFn: async() => {
      const res = await axios.get(`/pets/available?search=${search}&category=${category}`);
      return res.data;
    }
  });
  console.log(pets);

  if(isLoading) <h2>Loading...</h2>
  return (
    <div className='w-full bg-blue-100 px-25 py-10 text-center'>
      <div className='flex justify-between mb-10'>
        <input type="text" placeholder='Search by pet name...' 
        className='input input-bordered w-4/12 min-w-[140px]'
        onChange={(e) => setSearch(e.target.value) }
        value={search} />

        <select
          className="select select-bordered w-1/6 min-w-[130px]"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Duck">Duck</option>
          <option value="Fish">Fish</option>
        </select>
        
      </div>
      <div>
        <h1 className='text-3xl font-semibold text-[#002169] ' >Available Pets For Adoption</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
        {
          pets.map(pet => <SinglePet key={pet._id} pet={pet}></SinglePet> )
        }
      </div>
      </div>
    </div>
  );
};

export default AvailablePets;