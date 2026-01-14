import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { useInfiniteQuery } from '@tanstack/react-query';
import SinglePet from './SinglePet';
import { useInView } from 'react-intersection-observer';



const AvailablePets = () => {

  const axios = useAxios();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const {ref, inView} = useInView();

  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['availablePets', search, category],
    queryFn: async({pageParam = 1}) => {
      const res = await axios.get(`/pets/available`,{
        params: {
          page: pageParam,
          limit: 6,
          search,
          category
        }
      });
      return res.data;
    },
    getNextPageParam: (lastPage) => lastPage.nextPage 
  });
  
  useEffect(() => {
    if(inView && hasNextPage) {
      fetchNextPage();
    }
  },[inView, hasNextPage, fetchNextPage]);

  if(isLoading) return <h2>Loading...</h2>
  return (
    <div className='w-full bg-blue-100 px-10 md:px-20 lg:px-25 py-10 text-center'>
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
        {data?.pages?.map((page) =>
          page.pets.map((pet) => (
            <SinglePet key={pet._id} pet={pet} />
          ))
        )}
      </div>
      </div>
      <div ref={ref} className='h-10 flex justify-center items-center' >
        {isFetchingNextPage && <p>Loading More...</p>}
      </div>
    </div>
  );
};

export default AvailablePets;