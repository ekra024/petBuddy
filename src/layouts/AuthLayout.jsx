import React from "react";
import PetLogo from "../pages/Shared/PetLogo";
import { Outlet } from "react-router-dom";
import Lottie from "lottie-react";
import petAnimation from "../../public/SignUp.json";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div className="w-9/12 mx-auto">
      <PetLogo />
      <div className="lg:flex mt-0 gap-50">
        <div className="w-94 h-94 mt-0">
          <Lottie
            animationData={petAnimation}
            loop={true}
            autoPlay={true}
            className="w-full h-full"
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AuthLayout;
