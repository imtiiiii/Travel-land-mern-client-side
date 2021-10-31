import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import AuthProvider from '../Context/AuthProvider';
const useAuth = () => {
    return useContext(AuthContext);
}


export default useAuth;