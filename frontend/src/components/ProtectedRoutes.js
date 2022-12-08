import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

//Routes for calling user-specific information for data consistency
export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/signin" />;
}