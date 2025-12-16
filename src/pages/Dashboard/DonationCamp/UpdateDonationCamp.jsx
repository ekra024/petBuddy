import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const UpdateDonationCamp = () => {

  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const { register, handleSubmit, formState: {errors}} = useForm();

  const {data: campaigns=[], isLoading } = useQuery({
    queryKey: ['myDonationCampaigns'],
    queryFn: async () => {

      const res = await axiosSecure.get(`/campaigns/${user.email}`);

      //const res = await axiosSecure.get(`/campaigns/${user.email}`)
      return res.data;
    }
  })

  console.log(campaigns);

 const onSubmit = data => {
    console.log(data);
 }

  return (
    <div className='max-w-3xl mx-auto my-10 p-8 rounded-2xl shadow-lg bg-white border border-purple-200e'>
      <h1 className='text-3xl font-bold text-[#002169] mb-6 text-center'>Update The Donation Campaign</h1>
       <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
          <div>
            <label defaultValue={campaigns.petImage} className="block font-semibold text-[#002169]">Pet Image</label>
            <input type="file"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]" placeholder='choose a image file' />
          </div>
          <div>
            <label className="block font-semibold text-[#002169]">Target Amount</label>
            <input type="number"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            {...register('targetAmount', {required: true})}
            placeholder='Target Amount For Donation' />
          </div>
          {
            errors.targetAmount && (<span className='text-red-600 text-sm'>Target Amount is required</span> )
          }
          <div>
            <label className="block font-semibold text-[#002169]">Last Date of Donation</label>
            <input type="date"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            {...register('LastDate',{required: true})}
            placeholder='Last Date of Donation' />
          </div>
          {
            errors.lastDate && (<span className='text-red-600 text-sm'>Target Amount is required</span> )
          }
          <div>
            <label className="block font-semibold text-[#002169]">Description</label>
            <input type="text" defaultValue={campaigns.description} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            {...register('description',{required: true})}
            placeholder='Why need donation' />
          </div>
          {
            errors.lastDate && (<span className='text-red-600 text-sm'>Description is required</span> )
          }
          <div>
            <label className="block font-semibold text-[#002169]">Long Description</label>
            <textarea type="text"  className="w-full px-4 py-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            {...register('longDescription')}
            placeholder='Give Details information...'></textarea>
          </div>

          <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#894b8d] text-white font-semibold rounded-xl hover:bg-[#6c3870] transition-all shadow-lg"
        >
          Create A Campaign
        </button>
       </form>
    </div>
  );
};

export default UpdateDonationCamp;