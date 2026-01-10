import { SparklesIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CreateDonationCamp = () => {

  const {register, handleSubmit, reset , formState:{errors}} = useForm();
  const [petImage, setPetImage] = useState('');
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();


  const onSubmit = (data) => {
    console.log(data);
    const created_by = user.displayName;
    const userEmail = user.email;
    const date = new Date().toISOString();

    const campInfo = {
      ...data,
      targetAmount: Number(data.targetAmount),
      petImage,
      created_by,
      userEmail,
      donatedAmount: 0,
      date,
    }
    console.log(campInfo);

    axiosSecure.post('/campaigns', campInfo)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire('Thank you','Successfully Created A Campaign','success')
        reset();
      }
    })

    

  }

  const handleImageUpload = async(e) => {
    const image = e.target.files[0];
    console.log(image);

    const formData = new FormData();
    formData.append('image', image);

    const imageUploadURL =`https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;

    const res = await axios.post(imageUploadURL, formData);
    setPetImage(res.data.data.url);
  }

  return (
    <div className='max-w-3xl mx-auto my-10 p-8 rounded-2xl shadow-lg bg-white border border-purple-200e'>
      <h1 className='text-3xl font-bold text-[#002169] mb-6 text-center'>Create A Donation Campaign</h1>
       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-semibold text-[#002169]">Pet Image</label>
            <input type="file"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]" onChange={handleImageUpload} required placeholder='choose a image file' />
          </div>
          <div>
            <label className='block font-semibold text-[#002169]' >Pet Name</label>
            <input type="text" className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]'{...register('petName', {required: true})} placeholder='Enter Pet Name' />
          </div>
          {
            errors.petName && (<span className='text-red-600 text-sm'>Pet Name is Required</span> )
          }
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
            <input type="text"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
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

export default CreateDonationCamp;