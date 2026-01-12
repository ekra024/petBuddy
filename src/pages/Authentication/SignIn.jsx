import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";

const SignIn = () => {
  const { loginUser } = useAuth();
  const axiosBasic = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state?.from?.pathname || "/";

  console.log(path);
  

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
    };
    loginUser(data.email, data.password)
      .then(() => {
        axiosBasic.patch("/users", userInfo);
        toast.success("Sucessfully Login");
        setTimeout(() => {
          navigate(path);
        }, 2500);
      })
      .catch(() => {
        toast.error("Some issue occured");
      });
  };

  return (
    <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-8">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
        Welcome to PetBuddy
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>

      <div className="my-3 flex items-center">
        <hr className="grow border-gray-300" />
        <span className="px-3 text-gray-500 font-medium">or</span>
        <hr className="grow border-gray-300" />
      </div>

      <SocialLogin path={path} />
      <p className="text-center text-gray-600 mt-2">
        No account yet?
        <Link
          to="/signUp"
          state={path}
        
          className="text-blue-500 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
