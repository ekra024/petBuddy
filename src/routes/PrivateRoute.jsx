import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {user, loading} = useAuth();
  const location = useLocation();
  console.log(user, loading, location);

  if(loading) return <progress className="progress w-56"></progress>
  if(user && user?.email) return children;
  return <Navigate state={{ from: location }} replace to='/signIn'></Navigate>
};

export default PrivateRoute;