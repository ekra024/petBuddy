import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link, useParams } from 'react-router-dom';
import DonationModal from '../DonationModal/DonationModal';

const CampaignDetails = () => {

  const axiosSecure = useAxiosSecure();
  const {id} = useParams();
  const [openModal, setOpenModal] = useState(false);
  
  const {data: campaign, isLoading} = useQuery({
    queryKey: ['campaignDetail'],
    queryFn: async() => {
      const res = await axiosSecure.get(`/campaigns/${id}`);
      return res.data;
    }
  })
  console.log(campaign);

  if(isLoading) return <h2>Loading...</h2>
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-12 plus">
      
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 ">

          <img
           src={campaign.petImage}
            alt={campaign.petName}
            className="w-full h-full object-cover"
          />

          <div className="p-8 text-left"> 

            <h1 className="text-4xl font-bold baloo blue mb-4">
              {campaign.petName}
            </h1>

            <p className="light-blue mb-4">{campaign.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Target Amount:</strong> ${campaign.requiredAmount}</p>
              <p><strong>Donated Amount:</strong> ${campaign.donatedAmount}</p>
              <p><strong>Last Date:</strong> {new Date(campaign.LastDate).toLocaleDateString()}</p>   
              <p className='md:text-[12px] lg:text-sm' ><strong>Owner:</strong> {campaign.created_by}</p>
            </div>
            <div className='text-center mt-8 '>
              <button onClick={() => setOpenModal(true)} className={`mt-6 px-6 py-2 rounded-3xl  ${campaign.paused?"bg-gray-400 cursor-not-allowed":"bg-[purple] text-white hover:bg-purple-900 "} `}>Donate Now </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold baloo pruple mb-4">
          About {campaign.petName}
        </h2>
        <p className="leading-relaxed light-blue">
          {campaign.longDescription}
        </p>
        { openModal && !campaign.paused && ( <DonationModal campaign={campaign} closeModal={() => setOpenModal(false)} /> )}
      </div>
      
    </div>
  );
};

export default CampaignDetails;