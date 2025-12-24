import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PetDetailSkeleton from './PetDetailSkeleton';
import AdoptModal from './AdoptModal';


const PetDetail = () => {

  const {id} = useParams();
 
  const axiosSecure = useAxiosSecure();
  const [open, setOpen] = useState(false);

  const {data: pet, isLoading} = useQuery({
    queryKey:["petDetail",id],
    queryFn: async() => {
      const res = await axiosSecure.get(`/pets/${id}`);
      return res.data;
    }
  })

  //console.log(pet);

  if(isLoading) return <PetDetailSkeleton />
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-12 plus">

      
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 ">

          <img
            src={pet?.pet_image}
            alt={pet?.petName}
            className="w-full h-full object-cover"
          />

          <div className="p-8 text-left">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#ffbe17] text-[#002169] font-semibold">
              {pet?.category?.label}
            </span>

            <h1 className="text-4xl font-bold baloo blue mb-4">
              {pet?.petName}
            </h1>

            <p className="light-blue mb-4">{pet?.shortDesc}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Age:</strong> {pet?.age} years</p>
              <p><strong>Location:</strong> {pet?.location}</p>
              <p><strong>Status:</strong> {pet?.adoption ? "Adopted" : "Available"}</p>
              <p className='md:text-[12px] lg:text-sm' ><strong>Owner:</strong> {pet?.email}</p>
            </div>

            {/* CTA */}
            {!pet?.adoption && (
              <button onClick={() => setOpen(true)} className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-800 text-white rounded-lg font-semibold hover:opacity-90">
                Adopt Me
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold baloo pruple mb-4">
          About {pet?.petName}
        </h2>
        <p className="leading-relaxed light-blue">
          {pet?.longDesc}
        </p>
      </div>
      {open && <AdoptModal pet={pet} onClose={()=>setOpen(false)} /> }
    </div>
  );
};

export default PetDetail;