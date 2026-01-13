import { toast } from "react-toastify";
import useAuth from "./useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const axiosSecure = axios.create({
  baseURL: 'https://pet-buddy-server.vercel.app',
})

const useAxiosSecure = () => {
  const {user, logoutUser} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // REQUEST interceptor
    const reqInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(true); // 🔥 fresh token
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          delete config.headers.Authorization;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // RESPONSE interceptor
    const resInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          await logoutUser();
          toast.error("Unauthorized access");
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );

    // 🧹 CLEANUP (EXTREMELY IMPORTANT)
    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logoutUser, navigate]);

return axiosSecure;

};

export default useAxiosSecure;