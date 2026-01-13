import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const SocialLogin = ({path}) => {
  const { googleLogin, setUser } = useAuth();
  const navigate = useNavigate();

  const axios = useAxios();
 

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(async (res) => {
        const user = res.user;
        const userInfo = {
          email: user.email,
          role: "user",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };
        await axios.post("/users", userInfo);
        setUser(user);
        navigate(path);
      })
      .catch(() => {
        setTimeout(() => {
          navigate(path);
        }, 2000);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full mb-2 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:shadow-lg transition-shadow"
    >
      <FcGoogle size={24} />
      <span className="font-medium">Sign in with Google</span>
    </button>
  );
};

export default SocialLogin;
