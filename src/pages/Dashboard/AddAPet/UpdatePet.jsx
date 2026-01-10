import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';


const UpdatePet = () => {

  const {id} = useParams();
  const axiosSecure = useAxiosSecure();
  const axios = useAxios();
  const [image, setImage] = useState();

  const {handleSubmit , reset, register} = useForm();
  const navigate = useNavigate();

  const {isLoading, data: petInfo} = useQuery({
    queryKey:['petInfo',id],
    queryFn: async() => {
      const res = await axiosSecure(`/pets/${id}`);
      return res.data;
    }
  })

  useEffect(() => {
    if(petInfo){
      reset({
        petName: petInfo.petName,
        age: petInfo.age,
        location: petInfo.location,
        shortDesc: petInfo.shortDesc,
        longDesc: petInfo.longDesc,
        image: petInfo.image
      })
    }
  },[reset, petInfo]);

  const onSubmit = (data) => {
    console.log(data);
    const updatedPetInfo = {
      ...data,
      pet_image: image || petInfo.pet_image
    };
    axiosSecure.put(`/pets/${id}`, updatedPetInfo)
    .then((res) => {
      if(res.data.modifiedCount > 0){
        Swal.fire('Updated!','Pet Information Updated Successfully.','success');
        navigate('/dashboard/myAddedPets');
      }
    })
  }

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append('image',image);
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;

    const res = await axios.post(imageUploadUrl, formData);
    setImage(res.data.data.url);
  }

  if(isLoading) return <h2>Loading...</h2>
  console.log(petInfo);
  return (
     <div className="max-w-3xl mx-auto my-10 p-8 rounded-2xl shadow-lg bg-white border border-purple-200">
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#002169] mb-6 text-center">
        Update A Pet 🐾
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Pet Image */}
       
        <div>
          <label className="block font-semibold text-[#002169] mb-2">
            Pet Image
          </label>

          <div className="">
            <label
              htmlFor="petImageUpload"
              className="relative group w-36 h-36 rounded-xl border-2 border-dashed border-[#894b8d] cursor-pointer overflow-hidden flex items-center justify-center bg-gray-50"
            >
              {petInfo.pet_image ? (
                <img
                  src={petInfo.pet_image}
                  alt="Pet"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm text-red-800 text-center px-2">
                  Click to upload image
                </span>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  Change Image
                </span>
              </div>
            </label>
          </div>

          {/* Hidden File Input */}
          <input
            id="petImageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <p className="text-xs text-gray-700 mt-2">
            JPG, PNG up to 5MB
          </p>
        </div>

        {/* Pet Name */}
        <div>
          <label className="block font-semibold text-[#002169]">Pet Name</label>
          <input
            type="text"
            {...register("petName")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Charlie, Oreo, Simba..."
          />
          
        </div>

        {/* Age */}
        <div>
          <label className="block font-semibold text-[#002169]">Pet Age</label>
          <input
            type="number"
            {...register("age")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Age in years"
          />
          
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold text-[#002169]">
            Pickup Location
          </label>
          <input
            type="text"
            {...register("location")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Dhaka, Mirpur, Gulshan..."
          />
          
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-semibold text-[#002169]">
            Short Description
          </label>
          <input
            type="text"
            {...register("shortDesc")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="A cute friendly cat..."
          />
          
        </div>

        {/* Long Description */}
        <div>
          <label className="block font-semibold text-[#002169]">
            Long Description
          </label>
          <textarea
            {...register("longDesc")}
            className="w-full px-4 py-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Write detailed information about the pet..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#894b8d] text-white font-semibold rounded-xl hover:bg-[#6c3870] transition-all shadow-lg"
        >
          Update the Pet
        </button>
      </form>
    </div>
  );
};

export default UpdatePet;