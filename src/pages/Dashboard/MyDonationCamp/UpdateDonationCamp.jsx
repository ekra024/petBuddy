import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxios from "../../../hooks/useAxios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDonationCamp = () => {
  const axiosSecure = useAxiosSecure();
  const axios = useAxios();
  const { id } = useParams();
  const [petImage, setPetImage] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const { data: campaign, isLoading } = useQuery({
    queryKey: ["myDonationCampaigns"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/campaigns/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (campaign) {
      reset({
        petName: campaign.petName,
        lastDate: campaign.lastDate?.split("T")[0],
        description: campaign.description,
        longDescription: campaign.longDescription,
      });

      setPetImage(campaign.petImage);
    }
  }, [campaign, reset]);



  const onSubmit = (data) => {

    const updateCampForm = {
      ...data,
      petImage,

    };
    axiosSecure.put(`/campaigns/${id}`, updateCampForm).then((res) => {
      if(res.data.modifiedCount > 0) {
        Swal.fire('Updated!','Campaign Updated Successfully.','success');
        navigate('/dashboard/myDonationCamp');
      }
    })
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
  

    const formData = new FormData();
    formData.append("image", image);

    const imageUploadURL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;

    const res = await axios.post(imageUploadURL, formData);
    setPetImage(res.data.data.url);
  };

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div className="max-w-3xl mx-auto my-10 p-8 rounded-2xl shadow-lg bg-white border border-purple-200e">
      <h1 className="text-3xl font-bold text-[#002169] mb-6 text-center">
        Update The Donation Campaign
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block font-semibold text-[#002169] mb-2">
            Pet Image
          </label>

          <div className="">
            <label
              htmlFor="petImageUpload"
              className="relative group w-36 h-36 rounded-xl border-2 border-dashed border-[#894b8d] cursor-pointer overflow-hidden flex items-center justify-center bg-gray-50"
            >
              {petImage ? (
                <img
                  src={petImage}
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

        <div>
          <label className="block font-semibold text-[#002169]">Pet Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Enter Pet Name"
            {...register("petName", { required: true })}
          />
        </div>
    
        <div>
          <label className="block font-semibold text-[#002169]">
            Last Date of Donation
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            {...register("lastDate", { required: true })}
            placeholder="Last Date of Donation"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#002169]">
            Description
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            {...register("description", { required: true })}
            placeholder="Why need donation"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#002169]">
            Long Description
          </label>
          <textarea
            type="text"
            className="w-full px-4 py-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            {...register("longDescription")}
            placeholder="Give Details information..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#894b8d] text-white font-semibold rounded-xl hover:bg-[#6c3870] transition-all shadow-lg"
        >
          Update the Campaign
        </button>
      </form>
    </div>
  );
};

export default UpdateDonationCamp;
