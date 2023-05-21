import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { AuthProvider } from '../Auth/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user ,loader} = useContext(AuthProvider);
    if (loader) {
        return <Spinner  className='text-center' />
        
    }

    if (user) {
        return children
        
    }
  return <Navigate to={'/login'} state={{from:location}}></Navigate>
}

export default PrivateRoutes