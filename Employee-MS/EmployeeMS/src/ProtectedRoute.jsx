// ProtectedRoute.js
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // Check authentication status
  axios.get("http://localhost:3000/isAuthenticated").then((result) => {
    const { isloggedIn } = result.data;

    if (!isloggedIn) {
      navigate("/"); // Redirect to login if not logged in
    }
  });

  return <>{children}</>;
};

export default ProtectedRoute;
