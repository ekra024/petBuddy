import { toast } from "react-toastify";
import useAuth from "./useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
  const {user, logoutUser} = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(async(config) => {
   if(user?.accessToken) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
   }
    return config;
  }, error => {
    return Promise.reject(error);
  });

  axiosSecure.interceptors.response.use((res) => { return res; }, error => {
    const status = error.status;

    if(status == 401 || status === 403) {
       logoutUser().then(() => {
        toast.alert('Unorthorized Request');
        navigate('/login')
      }).catch(()=>{})
     
    }

    return Promise.reject(error);
  } 
)

return axiosSecure;

};

export default useAxiosSecure;