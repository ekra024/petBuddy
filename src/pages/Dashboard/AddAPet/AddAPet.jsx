import axios from "axios";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const categories = [
  { value: "Cat", label: "Cat" },
  { value: "Dog", label: "Dog" },
  { value: "Duck", label: "Duck" },
  { value: "Bird", label: "Bird" },
  { value: "Fish", label: "Fish" },
  { value: "Rabbit", label: "Rabbit" },
];

const AddAPet = () => {
  const {
    register,
    handleSubmit,
    control, reset,
    formState: { errors },
  } = useForm();
  const [pic, setPic] = useState();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const img = pic;
    const date = new Date().toISOString();
   

    const petInfo = {
      addedBy: user?.displayName,
      email: user?.email,
      adoption: false,
      pet_image: img,
      created_at: date,
      ...data,
    };

    axiosSecure.post("/pets", petInfo)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Thank you!",
          text: "Sucessfully added a pet",
          icon: "success",
        });
        navigate("/dashboard/myAddedPets")
      }
    })
    reset();
    
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];

    const formData = new FormData();
    formData.append("image", image);
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;

    const result = await axios.post(imageUploadUrl, formData);
    setPic(result.data.data.url);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 rounded-2xl shadow-lg bg-white border border-purple-200">
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#002169] mb-6 text-center">
        Add a New Pet 🐾
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Pet Image */}
        <div>
          <label className="block font-semibold text-[#002169]">
            Pet Image URL
          </label>
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            onChange={handleImageUpload}
          />
        </div>

        {/* Pet Name */}
        <div>
          <label className="block font-semibold text-[#002169]">Pet Name</label>
          <input
            type="text"
            {...register("petName", { required: "Pet name is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Charlie, Oreo, Simba..."
          />
          {errors.petName && (
            <p className="text-red-500 text-sm">{errors.petName.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block font-semibold text-[#002169]">Pet Age</label>
          <input
            type="number"
            {...register("age", { required: "Age is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Age in years"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        {/* Category - React Select */}
        <div>
          <label className="block font-semibold text-[#002169] mb-1">
            Category
          </label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                placeholder="Select category"
                className="react-select-container"
                classNamePrefix="react-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "#894b8d",
                    padding: 4,
                    borderRadius: 8,
                  }),
                }}
              />
            )}
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold text-[#002169]">
            Pickup Location
          </label>
          <input
            type="text"
            {...register("location", { required: "Location is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Dhaka, Mirpur, Gulshan..."
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-semibold text-[#002169]">
            Short Description
          </label>
          <input
            type="text"
            {...register("shortDesc", {
              required: "Short description is required",
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="A cute friendly cat..."
          />
          {errors.shortDesc && (
            <p className="text-red-500 text-sm">{errors.shortDesc.message}</p>
          )}
        </div>

        {/* Long Description */}
        <div>
          <label className="block font-semibold text-[#002169]">
            Long Description
          </label>
          <textarea
            {...register("longDesc", {
              required: "Long description is required",
            })}
            className="w-full px-4 py-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#894b8d]"
            placeholder="Write detailed information about the pet..."
          ></textarea>
          {errors.longDesc && (
            <p className="text-red-500 text-sm">{errors.longDesc.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#894b8d] text-white font-semibold rounded-xl hover:bg-[#6c3870] transition-all shadow-lg"
        >
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddAPet;
