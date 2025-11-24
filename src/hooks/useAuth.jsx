import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';

const useAuth = () => {
  const authUse = useContext(AuthContext);
  return authUse;
};

export default useAuth;