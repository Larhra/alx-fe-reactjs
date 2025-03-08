import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/" />;
  }
  return element; // Render the protected component if authenticated
};

export default PrivateRoute;