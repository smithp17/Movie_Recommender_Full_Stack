import { Navigate } from 'react-router-dom';
import React, { ReactElement } from 'react';

interface ProtectedRouteProps {
  children: ReactElement; // ✅ Use ReactElement for single child components
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): ReactElement => {
  const token = localStorage.getItem('token'); // Check for token

  return token ? children : <Navigate to="/" />; // Redirect if no token
};

export default ProtectedRoute;
