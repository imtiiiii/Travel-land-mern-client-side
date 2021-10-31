// this is context api
import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;