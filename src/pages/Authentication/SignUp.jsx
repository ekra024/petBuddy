import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxios from '../../hooks/useAxios'
import axios from "axios";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

const SignUp = () => {

  const {createUser, updatedUserProfile} = useAuth();
  const [profilePic, setProfilePic] = useState('');
  const axiosBasic = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state || "/";

  const {register, handleSubmit, formState:{errors}, } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }
  
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
    .then(async() => {
      const userInfo = {
        email: data.email,
        role: 'user',
        created_at : new Date().toISOString(),
        last_log_in : new Date().toISOString(),
      }

       await axiosBasic.post('/users', userInfo)
      
      const userProfile = {
        displayName: data.name,
        photoURL: profilePic,
      }

      updatedUserProfile(userProfile)
      .then(() => {
        toast.success('Sucessfully Registred')
        setTimeout(()=>{
          navigate(path);
        },2500)
      })
      .catch(()=> {
        toast.error('Something is Error for profile update')
      })
    })
    .catch(()=>{
      
      toast.error('Something is Error')
    })

  }

  const handleImageUpload = async(e) => {
  
    const image = e.target.files[0];

    console.log(image);

    const formData = new FormData();
    formData.append('image', image);
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`

    const res = await axios.post(imageUploadUrl, formData);
    console.log(res.data);
    setProfilePic(res.data.data.url)

  }


  return (
    <div className="bg-white shadow-md rounded-2xl w-full max-w-md px-8 py-2 h-min">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-3">
        Create Your Account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"           
            {...register('name', {required: true})}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        {
          errors.name && <span className="text-red-600">Name is required</span>
        }

        {/* Profile Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Profile Image
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full text-gray-600 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        {
          errors.name && <span className="text-red-600">It accept only Image</span>
        }

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            {...register('email', {required: true})}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        {
          errors.email && <span className="text-red-600">Name is required</span>
        }

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register('password', {required: true})}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 "
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

        </div>
        {
          errors.password && <span className="text-red-600">Name is required</span>
        }

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors mt-3"
        >
          Register
        </button>
      </form>

      {/* Divider */}
      <div className="my-3 flex items-center">
        <hr className="grow border-gray-300" />
        <span className="px-3 text-gray-500 font-medium">or</span>
        <hr className="grow border-gray-300" />
      </div>

      {/* Google Sign In */}
      <SocialLogin path={path} />

      {/* Already registered */}
      <p className="text-center text-gray-600">
        Already registered?
        <Link 
          to="/signIn"
          state={path}
          className="text-blue-500 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
